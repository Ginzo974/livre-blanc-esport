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
      intro="Plan de diffusion du livre blanc : cible, objectifs, canaux, timing, conversion, mesure et indicateurs."
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
          <strong>Objectif global : 120 vues du site</strong> sur la fenêtre de
          lancement, toutes plateformes confondues. Le livre se lisant
          directement en ligne, on compte des vues et des lecteurs, pas des
          téléchargements.
        </p>
        <p>
          <strong>Répartition par canal :</strong> les réseaux assurent le socle
          qualifié (≈ 3 lectures abouties via Twitter / X, ≈ 10 via LinkedIn) ;
          le gros du volume vient des chats Twitch des grosses chaînes esport FR,
          capables de générer un pic de visites en quelques minutes. Objectifs
          volontairement réalistes pour un premier lancement sans budget média.
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
          <strong>Chats Twitch (Kameto, OTP / Solary, Gentle Mates / M8…) :</strong>{" "}
          pendant les lives des grosses chaînes et structures esport françaises,
          le chat concentre des milliers de spectateurs qui sont exactement la
          cible. Un message bien placé peut envoyer un pic de visites. C&apos;est
          le canal le plus volumineux, mais aussi le plus délicat (voir la
          conversion).
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
          <li><strong>Chat Twitch :</strong> message court, lisible d&apos;un coup, avec un lien court mémorisable, posté au bon moment (quand un jersey, un logo ou un rebranding passe à l&apos;écran). Beaucoup de chaînes filtrent ou bloquent les liens : rester naturel et jamais en spam, sous peine de timeout.</li>
        </ul>
      </Field>

      <Field label="Mesure & outils">
        <p>
          Le trafic est suivi avec <strong>Vercel Web Analytics</strong>, intégré
          directement à l&apos;hébergement du site : gratuit, sans cookie ni
          bandeau RGPD, il remonte en temps réel le nombre de vues, les pages
          consultées, les sources de trafic, le pays et le type d&apos;appareil.
        </p>
        <p>
          Pour attribuer chaque vue à son canal, tous les liens partagés portent
          des paramètres <strong>UTM</strong> :
        </p>
        <ul>
          <li>Twitter / X : <code>{"?utm_source=twitter&utm_medium=social"}</code></li>
          <li>LinkedIn : <code>{"?utm_source=linkedin&utm_medium=social"}</code></li>
          <li>Twitch : <code>{"?utm_source=twitch&utm_medium=chat"}</code></li>
        </ul>
        <p>
          Sur Twitch, un lien court et mémorisable (domaine personnalisé ou
          raccourcisseur) facilite le clic dans un chat qui défile vite.
        </p>
      </Field>

      <Field label="KPI à surveiller">
        <ul>
          <li>Vues totales du site sur la période de lancement (objectif : 120).</li>
          <li>Vues et lecteurs par source (utm_source : twitter, linkedin, twitch).</li>
          <li>Taux de clic sur le lien depuis chaque publication.</li>
          <li>Profondeur de lecture et temps passé sur le long-read (scroll, durée moyenne).</li>
          <li>Impressions et engagement par post (likes, partages, commentaires).</li>
          <li>Contacts entrants : messages, demandes de connexion, opportunités.</li>
        </ul>
      </Field>
    </AnnexShell>
  );
}
