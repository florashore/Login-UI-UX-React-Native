import Image from "next/image"
import Container from "./Container"

export default function Header() {
  return (
    <div className="bg-gray-1000 p-2">
      <Container>
        <div className="flex justify-between">
          <Image alt="Talk to Me!" src="/logo.svg" width={140} height={140} />
          <Image alt="Hero Code" src="/hero.svg" width={50} height={50} />
        </div>
      </Container>
    </div>
  );
}
