import type { Metadata } from "next";
import { AnnexShell, Field } from "@/components/AnnexShell";

export const metadata: Metadata = {
  title: "Note de présentation — Du logo à la scène",
  description:
    "Note de présentation du livre blanc « Du logo à la scène » sur l'identité visuelle des équipes esport.",
};

export default function NotePresentation() {
  return (
    <AnnexShell
      kicker="Annexe · Note de présentation"
      title="Note de présentation du livre blanc"
      intro="« Du logo à la scène » : décrypter et concevoir l'identité visuelle d'une équipe esport."
    >
      <Field label="Auteur & cadre">
        Quentin Louis, étudiant en Master 2 Digital Design &amp; Creative
        Technologies à l&apos;ESD Bordeaux. Cinq ans de design dont quatre en
        alternance, dix ans de pratique de League of Legends. Un projet né de
        la rencontre de trois passions : le design, le jeu vidéo et l&apos;esport.
      </Field>

      <Field label="Le constat">
        Il existe très peu de ressources sérieuses, en français, sur
        l&apos;identité visuelle des équipes esport. Les rares guides restent en
        surface ou s&apos;appuient sur des chiffres flous. Pourtant l&apos;enjeu
        n&apos;est plus marginal : 15,4 millions de consommateurs esport en
        France, en croissance de 18 % en deux ans. Sur le terrain, deux mondes
        coexistent : une poignée d&apos;équipes à l&apos;identité réfléchie, et
        une majorité qui improvise. La différence tient à une chose, une méthode.
      </Field>

      <Field label="L'objet">
        Le premier livre blanc en français à proposer une méthodologie
        applicable d&apos;identité visuelle esport. Il s&apos;appuie sur six cas
        d&apos;étude actualisés en 2026 (Karmine Corp, T1, G2 Esports, Fnatic,
        NAVI, Team Vitality) et sur une équipe fictive, HUNTERS, conçue de zéro
        pour démontrer la méthode en pratique, du brief au système complet.
      </Field>

      <Field label="La promesse">
        Ce n&apos;est ni un catalogue, ni une analyse marketing : c&apos;est un
        manuel d&apos;action. À la fin de la lecture, le lecteur comprend comment
        se construit une identité visuelle d&apos;équipe esport et dispose de la
        méthode pour lancer la sienne dans la bonne direction.
      </Field>

      <Field label="Cibles">
        <ul>
          <li>Le curieux d&apos;esport et de design, qui repart avec un regard neuf sur les logos et jerseys qu&apos;il croise chaque semaine.</li>
          <li>Le designer, qui trouve une bibliographie rare en français et une méthode transposable à ses projets.</li>
          <li>Le dirigeant de structure esport, qui obtient le cadre stratégique avant de briefer un designer.</li>
        </ul>
      </Field>

      <Field label="Format">
        Un long-read web responsive, pensé pour la lecture à l&apos;écran
        (≈ 25 min). Le site <strong>est</strong> le livre blanc dans son
        intégralité : pas de version papier, pas de résumé, pas de PDF à
        télécharger. Six chapitres qui s&apos;enchaînent, animations de scroll et
        navigation latérale, chacun fermé sur une méthode applicable.
      </Field>
    </AnnexShell>
  );
}
