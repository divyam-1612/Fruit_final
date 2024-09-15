import React, { useState } from "react";
import axios from "axios";

const TranslatorPage = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("hi");

  const apiKey = "AIzaSyDM2ylFXV-2gHTMRiRiWhkQBqXl1sSqQrA";

  const handleTranslate = () => {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    axios
      .post(url, {
        q: inputText,
        target: targetLanguage,
      })
      .then((response) => {
        const translated = response.data.data.translations[0].translatedText;
        setTranslatedText(translated);
      })
      .catch((error) => {
        console.error("Error translating text:", error);
      });
  };

  return (
    <div className="h-screen w-screen bg-custom-gradient flex flex-col items-center font-sakal">
      <div className="text-[6rem] text-[#FFFFFF] pt-10 font-bold uppercase">
        Translator
      </div>
      <div className="flex flex-row items-center gap-10">
        <textarea
          className="w-[20rem] h-[6rem] p-5 text-2xl"
          rows="6"
          placeholder="Enter text to translate"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <div className="text-xl gap-2 flex">
          <div>
            <label className="">Select Target Language:</label>
          </div>
          <div>
            <select
              className="rouded-lg p-1"
              value={targetLanguage}
              onChange={(e) => setTargetLanguage(e.target.value)}
            >
              <option value="zh">Chinese</option>
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="hi">Hindi</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
              <option value="ml">Malayalam</option>
              <option value="pa">Punjabi</option>
              <option value="ru">Russian</option>
              <option value="es">Spanish</option>
              <option value="ta">Tamil</option>
              <option value="te">Telugu</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <button
          className="rounded-lg bg-[#FFE5C2] px-16 py-2 text-xl mt-10 hover:scale-95 transition-all duration-200 font-bold"
          onClick={handleTranslate}
        >
          Translate
        </button>
      </div>

      <div className="flex gap-4 text-3xl pt-10">
        <h2 className="">Translated Text:</h2>
        <p className="">
          {translatedText || "Your translated text will appear here..."}
        </p>
      </div>
    </div>
  );
};

export default TranslatorPage;
