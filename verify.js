// Retrieve the meta tag content
const metaTag = document.querySelector('meta[name="site-verification"]');
const metaString = metaTag ? metaTag.getAttribute('content') : '';

// Log a warning to the console
console.warn("Make sure this site is real. Verify at:", `https://github.com/NajmAjmal/SiteVerify/${metaString}`);

// Instructions for PGP verification
console.log("To verify PGP, use Najm Ajmal's public key: https://github.com/NajmAjmal/NajmAjmal/PGP");