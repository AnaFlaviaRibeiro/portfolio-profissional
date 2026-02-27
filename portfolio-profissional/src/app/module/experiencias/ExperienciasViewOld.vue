<template>
  <br>
  <div class="crt terminal experiencias-retro">
    <h2>EXPERIÊNCIAS</h2>

    <div class="experiencias-retro__list">
      <article
        v-for="exp in experiencias"
        :key="exp.id"
        class="card-ascii crt experiencias-retro__card"
      >
        <div class="experiencias-retro__meta">
          <span class="experiencias-retro__period">{{ exp.period }}</span>
          <span class="experiencias-retro__tag">[{{ exp.tag }}]</span>
        </div>
        <h3 class="experiencias-retro__role">{{ exp.role }}</h3>
        <p class="experiencias-retro__company">{{ exp.company }}</p>
        <p class="experiencias-retro__desc">{{ exp.description }}</p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import "../../../assets/crt.css";

interface Experiencia {
  id: number;
  period: string;
  tag: string;
  role: string;
  company: string;
  description: string;
}

const experiencias: Experiencia[] = [
  {
    id: 1,
    period: "2022 – 2024",
    tag: "Full-stack",
    role: "Estágiaria de Desenvolvimento de Software",
    company: "Saúde Agora",
    description:
      "Desenvolvimento e manutenção " +
      "em um sistema de saúde que foca em praticidade e "+
      "comodidade. Este sistema é construído utilizando "+
      "tecnologias como Vue.js no frontend, Java no backend e "+
      "o banco de dados PostgreSQL. Para executar o sistema "+
      "utilizamos o sistema operacional Linux Manjaro.",
  },
  {
    id: 2,
    period: "2024 – 2024",
    tag: "Full-stack",
    role: "Estágiaria de Desenvolvimento de Web",
    company: "Apsis Informática",
    description:
      "Desenvolvimento e manutenção de sistema para área de saúde na linguagem Java e Vue.js. Análise de casos e demandas enviadas por cliente. Implementação de novos módulos.",
  },
  {
    id: 3,
    period: "2024 – até o momento",
    tag: "Full-stack",
    role: "Desenvolvedor Java Junior",
    company: "Apsis Informática",
    description:
      "Desenvolvimento e manutenção " +
      "em um sistema de gestão de clínicas convêniadas que foca em praticidade e " +
      "comodidade. Este sistema é construído utilizando " +
      "tecnologias como Vue.js no frontend, Java no backend e " +
      "o banco de dados PostgreSQL. Para executar o sistema " +
      "utilizamos o sistema operacional Linux Manjaro.",
  },
];
</script>

<style scoped>
.experiencias-retro__list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
}

.experiencias-retro__card {
  --w: 100%;
  flex: 1 1 280px;
  min-width: 260px;
  max-width: 52ch;
}

.experiencias-retro__meta {
  margin-bottom: 0.4ch;
  font-size: 0.9rem;
  opacity: 0.9;
}

.experiencias-retro__period {
  margin-right: 1ch;
}

.experiencias-retro__tag {
  opacity: 0.85;
}

.experiencias-retro__role {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  margin: 0 0 0.25rem;
}

.experiencias-retro__company {
  font-size: 0.95rem;
  margin: 0 0 0.5rem;
  opacity: 0.9;
}

.experiencias-retro__desc {
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}
</style>
