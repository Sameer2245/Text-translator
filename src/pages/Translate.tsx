import React, { useState } from 'react';
import axios from 'axios';

const Translate: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('hi'); // Default to Hindi
  const [translatedText, setTranslatedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const languages = [
    { code: 'hi', name: 'Hindi' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'zh', name: 'Chinese (Simplified)' },
    { code: 'ar', name: 'Arabic' },
    { code: 'nl', name: 'Dutch' },
    { code: 'sv', name: 'Swedish' },
    { code: 'no', name: 'Norwegian' },
    { code: 'da', name: 'Danish' },
  ];

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to translate');
      return;
    }

    setIsLoading(true);
    setError('');
    setTranslatedText('');

    try {
      const response = await axios.post(
        'https://google-translate1.p.rapidapi.com/language/translate/v2',
        {
          q: inputText,
          target: targetLanguage,
          source: 'en'
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY || '258d35138fmsh1af57350759b035p19aebfjsnb8d2ed0f4071',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          }
        }
      );

      console.log('API Response:', response.data);

      if (response.data && response.data.data && response.data.data.translations && response.data.data.translations.length > 0) {
        setTranslatedText(response.data.data.translations[0].translatedText);
      } else {
        setError('Translation failed. Please check the response format.');
      }
    } catch (err: any) {
      console.error('Translation error:', err);
      if (err.response) {
        console.error('Error response:', err.response.data);
        console.error('Error status:', err.response.status);
        setError(`Translation failed: ${err.response.status} - ${err.response.data?.message || 'Unknown error'}`);
      } else {
        setError('Translation service is currently unavailable. Please try again later.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Text Translation
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">
            Translate your English text into various languages using MyMemory Translation API
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Input Section */}
              <div>
                <label htmlFor="input-text" className="block text-sm font-medium text-gray-700 mb-2">
                  English Text
                </label>
                <textarea
                  id="input-text"
                  rows={8}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Enter your English text here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                />
              </div>

              {/* Output Section */}
              <div>
                <label htmlFor="translated-text" className="block text-sm font-medium text-gray-700 mb-2">
                  Translated Text
                </label>
                <div
                  className="w-full h-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 overflow-y-auto"
                  style={{ minHeight: '192px' }}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="ml-2 text-gray-600">Translating...</span>
                    </div>
                  ) : translatedText ? (
                    <p className="text-gray-900 whitespace-pre-wrap">{translatedText}</p>
                  ) : (
                    <p className="text-gray-500 italic">Translation will appear here...</p>
                  )}
                </div>
              </div>
            </div>

            {/* Controls Section */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex-1 max-w-xs">
                <label htmlFor="target-language" className="block text-sm font-medium text-gray-700 mb-2">
                  Target Language
                </label>
                <select
                  id="target-language"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  value={targetLanguage}
                  onChange={(e) => setTargetLanguage(e.target.value)}
                >
                  {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleTranslate}
                disabled={isLoading || !inputText.trim()}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin -ml-1 mr-3 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                    Translating...
                  </>
                ) : (
                  <>
                    <svg className="-ml-1 mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C7.783 5 4 8.783 4 13.5c0 .369.033.728.094 1.075M8 21l.094-1.075A13.5 13.5 0 0012.751 19" />
                    </svg>
                    Translate
                  </>
                )}
              </button>
            </div>

            {/* Error Display */}
            {error && (
              <div className="mt-4 p-4 border border-red-300 rounded-md bg-red-50">
                <div className="flex">
                  <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="ml-3 text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;
