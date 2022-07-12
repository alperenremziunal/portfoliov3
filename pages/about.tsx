import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';
import avatarBW from 'public/avatar-bw.jpg';

export default function About() {
  return (
    <Container title="About – Alperen Remzi Ünal">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/alprnunal">@alprnunal</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/alperenremziunal">@alperenremziunal</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://alperenremziunal.com">
                <a>https://alperenremziunal.com</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/alperenremziunal/">
                https://www.linkedin.com/in/alperenremziunal
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Alperen Remzi Ünal, Computer Science Student at -</p>
          <h3>Long, 3rd Person</h3>
          <p>
            Alperen Remzi Ünal is Computer Science Student at{' '}
            <a href="https://alperenremziunal.com/">-</a>, ----------
          </p>
          <h3>Long, 1st Person</h3>
          <p>
            Hey, I'm Alperen. I'm Computer Science Student at{' '}
            <a href="https://alperenremziunal.com/">-</a>, -------
          </p>
          <h3>Short, 3rd Person</h3>
          <p>
            Alperen Remzi Ünal is Computer Science Student at{' '}
            <a href="https://alperenremziunal.com/">-</a>, where he helps developers
            build a faster web.
          </p>
          <h3>Short, 1st Person</h3>
          <p>
            Hey, I'm Alperen. I'm Computer Science Student at{' '}
            <a href="https://alperenremziunal.com/">-</a>, where my team helps
            developers build a faster web.
          </p>
          <h3>Education</h3>
          <p>
            Alperen Remzi Unal graduated from - University with a B.S. in
            Computer Engineering.
          </p>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="Alperen Remzi Ünal headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            <a href="/avatar-bw.jpg">
              <Image
                alt="Alperen Remzi Ünal headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}
