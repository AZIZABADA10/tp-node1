const { salutation } = require('./app'); 

function testsalutation() { 
    const result = salutation(); 
    if (result === 'bonjour le monde!') { 
        console.log('Test Passed: salutation() = bonjour le monde'); 
    } else { 
        console.error('Test Failed: salutation() =', result); 
    } 
} 

// Exécution du test 
testsalutation(); 
