// Clear console and add blank line
console.clear();
console.log('\n');

// Retrieve the meta tag content
const metaTag = document.querySelector('meta[name="site-verification"]');
const metaString = metaTag ? metaTag.getAttribute('content') : '';

// Check if the domain name contains "najm.uk"
const domainName = window.location.hostname;
const isNajmUk = domainName.includes('najm.uk');

if (isNajmUk) {
    // Site is auto verified
    console.log('%cSite Auto Verified', 'color: #33CC33; font-size: 20px; font-weight: bold;');
    console.log(`Found Najm.uk in the domain name: ${domainName}`);
} else {
    // Increase the size of the warning
    console.group('%cSite Verification Warning', 'color: #FF5733; font-size: 20px; font-weight: bold;');
    console.warn('Make sure this site is real. Verify at:');
    console.log(`%c(PGP SIGN) https://raw.githubusercontent.com/NajmAjmal/SiteVerify/main/sites/${metaString}`, 'color: #3366FF; text-decoration: underline;');
    console.groupEnd();

    // Instructions for PGP verification
    console.group('%cPGP Verification Instructions', 'color: #33CC33; font-size: 16px; font-weight: bold;');
    console.log('To verify PGP, use Najm Ajmal\'s public key:');
    console.log('%c(PGP PUB)  https://raw.githubusercontent.com/NajmAjmal/NajmAjmal/main/PGP', 'color: #3366FF; text-decoration: underline;');
    console.log('Use this website to verify the signature:');
    console.log('%chttps://pgp.najm.uk', 'color: #3366FF; text-decoration: underline;');
    console.groupEnd();
}

console.log('\n');