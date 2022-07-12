import Container from 'components/Container';
import Image from 'next/future/image';

export default function Uses() {
  return (
    <Container
      title="Uses – Alperen Remzi Ünal"
      description="Here's what tech I'm currently using for coding, gaming and music."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          My Gear
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          Here's what tech I'm currently using for coding, gaming, and music.
        </p>
        <Image
          className="rounded-lg"
          alt={`My computer desk`}
          src={`/static/images/none.png`}
          width={2164 / 2}
          height={1546 / 2}
          priority
        />
        <div className="prose dark:prose-dark w-full">
          <h3 id="computer-office">Computer / Office</h3>
          <ul>
            <li>13&quot; Apple Macbook Pro M1 (2020)</li>
            <li>Steelseries Rival 300 CS:GO Hyper Beast Special Edition Mouse</li>
            <li>Apple Magic Keyboard</li>
          </ul>
          <h3 id="coding">Coding</h3>
          <ul>
            <li>
              Editor: VSCode
            </li>
            <li>Terminal: Hyper / zsh</li>
          </ul>
          <h3 id="audio-video">Audio / Video</h3>
          <ul>
            <li>IK Multimedia iRig HD 2</li>
          </ul>
          <h3 id="software">Software</h3>
          <ul>
            <li>Photoshop</li>
            <li>Spotify</li>
          </ul>
          <h3 id="music">Music</h3>
          <ul>
            <li>Beats Studio 3 Decade Collection Wireless Over-Ear Headphones</li>
          </ul>
          <h3 id="other-tech">Other Tech</h3>
          <ul>
            <li>Apple Airpods Pro</li>
            <li>Apple Watch Nike Series 6</li>
            <li>Apple iPhone 12</li>
            <li>Kingston Nucleum USB-C Hub</li>
          </ul>
        </div>
      </article>
    </Container>
  );
}
