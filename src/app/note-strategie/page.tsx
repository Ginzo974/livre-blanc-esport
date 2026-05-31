import type { Metadata } from "next";
import { AnnexShell, Field } from "@/components/AnnexShell";

export const metadata: Metadata = {
  title: "Stratégie inbound — Du logo à la scène",
  description:
    "Note de synthèse de la stratégie inbound de diffusion du livre blanc « Du logo à la scène ».",
};

export default function NoteStrategie() {
  return (
    <AnnexShell
      kicker="Annexe · Stratégie inbound"
      title="Note de synthèse de la stratégie inbound"
      intro="Plan de diffusion du livre blanc : cible, objectifs, canaux, timing, conversion et indicateurs."
    >
      <Field label="Cible">
        Communauté esport francophone de 18 à 35 ans, joueurs et spectateurs
        sensibles au design des équipes. En second cercle : designers juniors
        en quête de méthode, et dirigeants de petites structures (Tier 3) qui
        veulent professionnaliser leur identité. À titre personnel, la cible
        sert aussi à démontrer une expertise au croisement design + esport
        (recruteurs, studios, agences).
      </Field>

      <Field label="Objectifs de diffusion">
        <p>
          <strong>Quantitatif (lancement) :</strong> 3 lectures du livre issues
          de Twitter / X et 10 de LinkedIn. Le livre se lisant directement en
          ligne, on mesure les lecteurs qui ouvrent et parcourent le long-read,
          pas des téléchargements. Des objectifs volontairement réalistes pour
          un premier lancement sans budget média.
        </p>
        <p>
          <strong>Qualitatif :</strong> asseoir la crédibilité de l&apos;auteur
          sur le créneau identité visuelle esport, générer quelques contacts
          qualifiés (recruteurs, structures, designers) et faire vivre le projet
          comme pièce de portfolio.
        </p>
      </Field>

      <Field label="Canaux de diffusion">
        <p>
          <strong>Twitter / X :</strong> canal natif de la communauté esport
          francophone, idéal pour toucher les passionnés et créer de
          l&apos;engagement organique autour des cas d&apos;étude.
        </p>
        <p>
          <strong>LinkedIn :</strong> canal professionnel, pour les recruteurs,
          agences et dirigeants de structures, avec un angle méthode et
          expertise design.
        </p>
        <p>
          En appui : bouche-à-oreille auprès du réseau école (ESD Bordeaux) et
          des contacts esport.
        </p>
      </Field>

      <Field label="Timing">
        Diffusion prévue en <strong>juillet</strong>, en phase avec une période
        esport active (segments d&apos;été des ligues), quand l&apos;attention
        de la communauté est forte.
      </Field>

      <Field label="Processus de conversion">
        <p>
          Pas de téléchargement, pas de formulaire : le site est à la fois la
          landing et le livre blanc. Un clic depuis un post mène directement à la
          lecture. Le seul appel à l&apos;action,{" "}
          <strong>« Lire le livre blanc »</strong>, pointe vers le long-read.
        </p>
        <p>Accroches adaptées par canal :</p>
        <ul>
          <li><strong>Twitter / X :</strong> entrée par l&apos;émotion et le visuel. « Pourquoi le K bleu de la Karmine Corp te reste en tête ? », puis le lien vers le livre.</li>
          <li><strong>LinkedIn :</strong> entrée par la valeur et la méthode. « Comment se construit, étape par étape, l&apos;identité d&apos;une équipe esport. »</li>
        </ul>
      </Field>

      <Field label="KPI à surveiller">
        <ul>
          <li>Nombre de lecteurs (sessions), ventilé par canal de provenance (Twitter vs LinkedIn).</li>
          <li>Taux de clic sur le lien depuis chaque publication.</li>
          <li>Profondeur de lecture et temps passé sur le long-read (scroll, durée moyenne).</li>
          <li>Impressions et engagement par post (likes, partages, commentaires).</li>
          <li>Contacts entrants : messages, demandes de connexion, opportunités.</li>
        </ul>
      </Field>
    </AnnexShell>
  );
}
