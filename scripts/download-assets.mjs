import { writeFileSync, mkdirSync } from 'fs';

const files = [
  { url: 'https://valentincheval.design/_astro/red-dot-white.BCoP2Tnu.svg', path: 'public/images/red-dot-white.svg' },
  { url: 'https://valentincheval.design/_astro/uxdesign-white._MZKNTN5.svg', path: 'public/images/uxdesign-white.svg' },
  { url: 'https://valentincheval.design/_astro/dfa-white.BALS8Xtv.svg', path: 'public/images/dfa-white.svg' },
  { url: 'https://valentincheval.design/_astro/home-hero-bg.De-tmfJH.jpg', path: 'public/images/home-hero-bg.jpg' },
  { url: 'https://valentincheval.design/_astro/home-hero-trans.Cs3-2RgM.png', path: 'public/images/home-hero-trans.png' },
  { url: 'https://valentincheval.design/_astro/liquid.CXyRKLCs.svg', path: 'public/images/liquid.svg' },
  { url: 'https://valentincheval.design/_astro/gotyme-bank.DVOVa8l4.svg', path: 'public/images/gotyme-bank.svg' },
  { url: 'https://valentincheval.design/_astro/european-commission.D_TRjiMg.svg', path: 'public/images/european-commission.svg' },
  { url: 'https://valentincheval.design/_astro/bitcoin.Cs3CdaZj.svg', path: 'public/images/bitcoin.svg' },
  { url: 'https://valentincheval.design/_astro/defichan.Vdwh9SpT.svg', path: 'public/images/defichan.svg' },
  { url: 'https://valentincheval.design/_astro/bitmex.CbkaGMsd.svg', path: 'public/images/bitmex.svg' },
  { url: 'https://valentincheval.design/_astro/birthday-research.CFEZPg5G.svg', path: 'public/images/birthday-research.svg' },
  { url: 'https://valentincheval.design/_astro/babylons.BG1cQEuu.svg', path: 'public/images/babylons.svg' },
  { url: 'https://valentincheval.design/_astro/diag.IFrY-RoY.svg', path: 'public/images/diag.svg' },
  { url: 'https://valentincheval.design/_astro/rectangle-2-1-.Dils9qPu.jpg', path: 'public/images/portrait.jpg' },
  { url: 'https://valentincheval.design/_astro/red-dot.CCXu2err.svg', path: 'public/images/red-dot.svg' },
  { url: 'https://valentincheval.design/_astro/uxdesign.CjbUHBmK.svg', path: 'public/images/uxdesign.svg' },
  { url: 'https://valentincheval.design/_astro/dfa.CEQMQZNH.svg', path: 'public/images/dfa.svg' },
  { url: 'https://valentincheval.design/_astro/creativepool.BBTgYfEZ.svg', path: 'public/images/creativepool.svg' },
  { url: 'https://valentincheval.design/_astro/asterisk1.DsYbs0MU.svg', path: 'public/images/asterisk.svg' },
  { url: 'https://valentincheval.design/_astro/intro-service-blur.CErASngv.png', path: 'public/images/intro-service-blur.png' },
  { url: 'https://valentincheval.design/_astro/bitmex-cover.DpIAWMTO.jpg', path: 'public/images/bitmex-cover.jpg' },
  { url: 'https://valentincheval.design/_astro/define-hero.D97LaZGw.jpg', path: 'public/images/define-hero.jpg' },
  { url: 'https://valentincheval.design/_astro/gotymebank.D2jICiWb.jpg', path: 'public/images/gotymebank.jpg' },
  { url: 'https://valentincheval.design/_astro/1720243182389.BbR7cM7G.jpeg', path: 'public/images/testimonial-1.jpeg' },
  { url: 'https://valentincheval.design/_astro/1574264152829-1-.YzTyQJhQ.jpeg', path: 'public/images/testimonial-2.jpeg' },
  { url: 'https://valentincheval.design/_astro/testi-pp.C1nnlGq3.jpg', path: 'public/images/testimonial-3.jpg' },
  { url: 'https://valentincheval.design/_astro/1670928131980-1-.CnBfS2Ag.jpeg', path: 'public/images/testimonial-4.jpeg' },
  { url: 'https://valentincheval.design/_astro/1692949587857-1-.CQeqpEvS.jpeg', path: 'public/images/testimonial-5.jpeg' },
  { url: 'https://valentincheval.design/_astro/1696248927003-1-.ClS4O0Sn.jpeg', path: 'public/images/testimonial-6.jpeg' },
  { url: 'https://valentincheval.design/_astro/1704178306103-1-.BIVov0qs.jpeg', path: 'public/images/testimonial-7.jpeg' },
  { url: 'https://valentincheval.design/_astro/footer-blend-dark.Cv8xNkIH_2sxNTp.png', path: 'public/images/footer-blend-dark.png' },
  { url: 'https://valentincheval.design/_astro/footer-blend-light.CMR27nxS_ZT3ukJ.png', path: 'public/images/footer-blend-light.png' },
  { url: 'https://valentincheval.design/_astro/footer-bg-gr2.B2Xs9HmC.png', path: 'public/images/footer-bg-gr2.png' },
  { url: 'https://valentincheval.design/fonts/HelveticaNeue-Light.woff2', path: 'public/fonts/HelveticaNeue-Light.woff2' },
  { url: 'https://valentincheval.design/fonts/HelveticaNeue-Roman.woff2', path: 'public/fonts/HelveticaNeue-Roman.woff2' },
  { url: 'https://valentincheval.design/fonts/HelveticaNeue-Medium.woff2', path: 'public/fonts/HelveticaNeue-Medium.woff2' },
  { url: 'https://valentincheval.design/fonts/MatterRegular.woff2', path: 'public/fonts/MatterRegular.woff2' },
  { url: 'https://valentincheval.design/fonts/MatterMedium.woff2', path: 'public/fonts/MatterMedium.woff2' },
  { url: 'https://valentincheval.design/fonts/MatterSemiBold.woff2', path: 'public/fonts/MatterSemiBold.woff2' },
  { url: 'https://valentincheval.design/fonts/MatterBold.woff2', path: 'public/fonts/MatterBold.woff2' },
  { url: 'https://valentincheval.design/Favicon.png', path: 'public/seo/favicon.png' },
  { url: 'https://valentincheval.design/images/open-graph.jpg', path: 'public/seo/og-image.jpg' },
  { url: 'https://valentincheval.design/images/glow-1.png', path: 'public/images/glow-1.png' },
  { url: 'https://valentincheval.design/images/glow-2.png', path: 'public/images/glow-2.png' },
  { url: 'https://valentincheval.design/images/glow-4.png', path: 'public/images/glow-4.png' },
  { url: 'https://valentincheval.design/images/adjusted_grain_image.png', path: 'public/images/adjusted_grain_image.png' },
];

const BASE = '/Users/uk/Development/Protfolio';

async function download(url, path, retries = 3) {
  const fullPath = BASE + '/' + path;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buffer = Buffer.from(await res.arrayBuffer());
      writeFileSync(fullPath, buffer);
      console.log(`✓ ${path}`);
      return true;
    } catch (e) {
      if (attempt < retries) {
        console.log(`  retry ${attempt}/${retries} ${path}`);
        await new Promise(r => setTimeout(r, 2000 * attempt));
      } else {
        console.error(`✗ ${path}: ${e.message}`);
        return false;
      }
    }
  }
  return false;
}

async function main() {
  const concurrency = 4;
  let success = 0, failure = 0;
  for (let i = 0; i < files.length; i += concurrency) {
    const batch = files.slice(i, i + concurrency);
    const results = await Promise.all(batch.map(f => download(f.url, f.path)));
    results.forEach(r => { r ? success++ : failure++; });
  }
  console.log(`\nDone! ${success} succeeded, ${failure} failed.`);
}

main().catch(console.error);
