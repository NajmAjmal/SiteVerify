// Retrieve the meta tag content
const metaTag = document.querySelector('meta[name="site-verification"]');
const metaString = metaTag ? metaTag.getAttribute('content') : '';

// Log a warning to the console
console.group('%cSite Verification Warning', 'color: #FF5733; font-size: 18px; font-weight: bold;');
console.warn('Make sure this site is real. Verify at:');
console.log(`%chttps://raw.githubusercontent.com/NajmAjmal/SiteVerify/main/sites/${metaString}`, 'color: #3366FF; text-decoration: underline;');
console.groupEnd();

// Instructions for PGP verification
console.group('%cPGP Verification Instructions', 'color: #33CC33; font-size: 16px; font-weight: bold;');
console.log('To verify PGP, use Najm Ajmal\'s public key:');
console.log('%chttps://github.com/NajmAjmal/NajmAjmal/PGP', 'color: #3366FF; text-decoration: underline;');
console.groupEnd();
