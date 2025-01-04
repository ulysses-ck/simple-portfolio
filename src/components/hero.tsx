import Image from "next/image";

export default function Hero() {
  const text = [
    { text: "Hi 👋,", id: "hi" },
    { text: "My name is", id: "name" },
    { text: "Pavan MG", id: "pavan" },
    { text: "I build things for web", id: "build" },
  ];

  return (
    <section className="flex items-center py-10 justify-around w-full">
      <h2 className="text-4xl font-bold flex flex-col">
        {text.map((item) => (
          <span
            className={`${
              item.id === "pavan"
                ? "bg-gradient-to-r from-light-blue-custom to-purple-custom text-transparent bg-clip-text"
                : "text-dark-text dark:text-light-text"
            }`}
            key={item.id}
          >
            {item.text}
          </span>
        ))}
      </h2>
      <div className="rounded-full flex items-center justify-center bg-light-content dark:bg-dark-content w-fit h-fit p-4 bg-gradient-to-b from-light-blue-custom to-purple-custom">
        <Image
          className="rounded-full"
          src="https://i.pravatar.cc/500?img=7"
          alt="Hero"
          width={350}
          height={350}
        />
      </div>
    </section>
  );
}
