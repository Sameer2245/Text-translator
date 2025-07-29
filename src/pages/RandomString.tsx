import React, { useState, useCallback, useEffect } from 'react';

const RandomString: React.FC = () => {
  const [randomString, setRandomString] = useState('');
  const [stringLength, setStringLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  // Generate random string using useCallback
  const generateRandomString = useCallback(() => {
    let charset = '';
    
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (charset === '') {
      charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    }

    let result = '';
    for (let i = 0; i < stringLength; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    
    setRandomString(result);
  }, [stringLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  // Generate string on component mount using useEffect
  useEffect(() => {
    generateRandomString();
  }, [generateRandomString]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(randomString);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 100) {
      setStringLength(value);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Random String Generator
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Generate secure random alphanumeric strings for passwords, tokens, and more
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6">
            {/* Generated String Display */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Generated String
              </label>
              <div className="relative">
                <div className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 min-h-[80px] flex items-center justify-center">
                  <p className="text-lg font-mono text-gray-900 break-all text-center">
                    {randomString || 'Click "Generate New" to create a random string'}
                  </p>
                </div>
                {randomString && (
                  <button
                    onClick={copyToClipboard}
                    className="absolute top-2 right-2 p-2 text-gray-500 hover:text-gray-700 transition-colors"
                    title="Copy to clipboard"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Configuration Options */}
            <div className="space-y-6">
              {/* String Length */}
              <div>
                <label htmlFor="string-length" className="block text-sm font-medium text-gray-700 mb-2">
                  String Length: {stringLength}
                </label>
                <input
                  id="string-length"
                  type="range"
                  min="1"
                  max="100"
                  value={stringLength}
                  onChange={handleLengthChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              {/* Character Type Checkboxes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Character Types
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={includeUppercase}
                      onChange={(e) => setIncludeUppercase(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Uppercase (A-Z)</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={includeLowercase}
                      onChange={(e) => setIncludeLowercase(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Lowercase (a-z)</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={includeNumbers}
                      onChange={(e) => setIncludeNumbers(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Numbers (0-9)</span>
                  </label>

                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={includeSymbols}
                      onChange={(e) => setIncludeSymbols(e.target.checked)}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-sm text-gray-700">Symbols (!@#$...)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <div className="mt-8 text-center">
              <button
                onClick={generateRandomString}
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors"
              >
                <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Generate New String
              </button>
            </div>

            {/* String Info */}
            {randomString && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-medium text-blue-800 mb-2">String Information</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-blue-600">Length:</span>
                    <span className="ml-2 text-blue-800 font-medium">{randomString.length} characters</span>
                  </div>
                  <div>
                    <span className="text-blue-600">Entropy:</span>
                    <span className="ml-2 text-blue-800 font-medium">
                      ~{Math.floor(Math.log2(Math.pow(
                        (includeUppercase ? 26 : 0) + 
                        (includeLowercase ? 26 : 0) + 
                        (includeNumbers ? 10 : 0) + 
                        (includeSymbols ? 25 : 0) || 62, 
                        stringLength
                      )))} bits
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 p-4 border border-green-300 rounded-md bg-green-50">
          <div className="flex">
            <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <p className="ml-3 text-sm text-green-700">
              <strong>Security Note:</strong> These strings are generated using JavaScript's Math.random() which is suitable for most non-cryptographic purposes. For cryptographic applications, consider using a server-side cryptographically secure random generator.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomString;
