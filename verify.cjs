const path = require("path");
const { chromium } = require("playwright");

const root = __dirname;
const port = 5175;

(async () => {
  const { createServer } = await import("vite");
  const server = await createServer({
    root,
    logLevel: "silent",
    server: {
      host: "127.0.0.1",
      port,
      strictPort: true,
    },
  });

  await server.listen();

  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.BROWSER_EXE || undefined,
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (error) => errors.push(error.message));

  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForSelector("text=Arjuna Fransesco", { timeout: 60000 });
  for (const section of ["about", "projects", "experience", "contact", "home"]) {
    await page.evaluate((id) => {
      const target = document.getElementById(id);
      if (!target) return;
      const top = id === "home" ? 0 : target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: "instant" });
    }, section);
    await page.waitForTimeout(250);
  }
  await page.screenshot({ path: path.join(root, "assets", "portfolio-vite-desktop.png"), fullPage: true });
  await page.evaluate(() => {
    const target = document.getElementById("projects");
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 76, behavior: "instant" });
  });
  await page.waitForTimeout(250);
  const activeAfterScroll = await page.locator("nav[aria-label='Navigasi utama'] .is-active").innerText();
  await page.setViewportSize({ width: 390, height: 900 });
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForSelector("text=Arjuna Fransesco", { timeout: 60000 });
  for (const section of ["about", "projects", "experience", "contact", "home"]) {
    await page.evaluate((id) => {
      const target = document.getElementById(id);
      if (!target) return;
      const top = id === "home" ? 0 : target.getBoundingClientRect().top + window.scrollY - 76;
      window.scrollTo({ top, behavior: "instant" });
    }, section);
    await page.waitForTimeout(250);
  }
  await page.screenshot({ path: path.join(root, "assets", "portfolio-vite-mobile.png"), fullPage: true });

  const text = await page.locator("body").innerText();
  const checks = {
    hasName: text.includes("Arjuna Fransesco"),
    hasProjects: text.includes("Anita Konveksi Web System"),
    hasContact: text.includes("Copy email"),
    activeAfterProjectScroll: activeAfterScroll,
    consoleErrors: errors,
  };

  await browser.close();
  await server.close();
  console.log(JSON.stringify(checks, null, 2));
})();
