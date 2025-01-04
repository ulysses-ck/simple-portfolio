export default function GradientText({ children }: { children: React.ReactNode }) {
  return <span className="bg-gradient-to-r from-light-blue-custom to-purple-custom text-transparent bg-clip-text">{children}</span>;
}
