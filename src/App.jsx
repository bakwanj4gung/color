import { useState } from "react"
import colors from "./lib/colors"

function App() {
  const [bgColor, setBgColor] = useState("gray-300");
  const [content, setContent] = useState();

  const handleChange = (className, name, englishName, moods) => {
    setBgColor(className);
    setContent({name: name, englishName: englishName, moods: moods});
  }
  return (
    <div className={`${bgColor} relative transition-all delay-100 duration-1000 min-h-screen w-full py-10 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-80`}>
      <h1 className="text-5xl text-center font-bold">Makna Warna</h1>
      <div className="my-5 text-center">
        <p>Tahukah kamu kalau ternyata warna mewakili beberapa perasaan atau keadaan?</p>
        <p>Pilih warna di bawah untuk mengetahui maknanya!</p>
      </div>
      <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center my-10 md:text-lg">
        {colors.map((color) => (
          <a href="#content" onClick={() => handleChange(color.class, color.name, color.english, color.mood)} className={`${color.class} w-32 h-32 font-bold p-4 cursor-pointer transition-all shadow-2xl hover:-translate-y-1 uppercase`}>
            {color.name}
          </a>
        ))}
      </div>
      {content && 
        <div key={content.name} id="content" className="my-28 animate-fade-in capitalize">
          <h2 className="text-4xl font-bold">{content.name}</h2>
          <p className="text-sm italic">{content.englishName}</p>
          <ul className="my-10 list-disc list-inside ms-2 text-lg">
            {content.moods.map((mood, index) => (
              <li key={index}>{mood}</li>
            ))}
          </ul>
        </div>
      }
      <footer className="absolute bottom-5 right-5 w-full text-end">
        <a href="https://github.com/bakwanj4gung" target="_blank" className="text-sm ">bakwanj4gung</a>
      </footer>
    </div>
  )
}

export default App
