import {
  FACEBOOK_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Stats({ text }) {
  const words = text.split(" ").filter((word) => word !== "").length;
  const characters = text.length;
  const instagramCharactersLeft = INSTAGRAM_MAX_CHARACTERS - characters;
  const facebookCharactersLeft = FACEBOOK_MAX_CHARACTERS - characters;

  return (
    <section className="stats">
      <Stat number={words ? words : 0} label="Words" />
      <Stat number={characters} label="Characters" />
      <Stat number={instagramCharactersLeft} label="Instagram" />
      <Stat number={facebookCharactersLeft} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 && "stat__number--limit"}`}>
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
