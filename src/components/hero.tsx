import Image from "next/image";

export default function Hero() {
  const text = [
    { text: "Hi 👋,", id: "hi" },
    { text: "My name is", id: "name" },
    { text: "Pavan MG", id: "pavan" },
    { text: "I build things for web", id: "build" },
  ];

  return (
    <section className="flex items-center">
      <h2 className="text-4xl font-bold">
        {text.map((item) => (
          <span key={item.id}>{item.text}</span>
        ))}
      </h2>
      <div>
        <Image src="/images/avatar.png" alt="Hero" width={500} height={500} />
      </div>
    </section>
  );
}
