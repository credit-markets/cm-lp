// Every visible string on the landing page, in English and Brazilian Portuguese.
// `pt` is typed against `en`, so a missing or extra key fails the build.

const en = {
  meta: {
    htmlLang: "en",
    title: "Credit Markets | The modular real-world credit protocol",
    description: "Curated, risk-isolated credit vaults on Solana, powered by local originators in Brazil and settled in dollar yield.",
  },
  nav: {
    links: { thesis: "Thesis", protocol: "Protocol", investors: "Investors", originators: "Originators", research: "Research" },
    cta: "Request access",
    skip: "Skip to main content",
    home: "Credit Markets home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchTo: "PT",
    switchLabel: "Ver em português",
  },
  hero: {
    title: "The modular real-world credit protocol.",
    sub: "Curated, risk-isolated credit vaults on Solana, powered by local originators and settled in dollar yield.",
    cta: "Request access",
    app: "Launch app",
    stats: [
      { value: "T+0", label: "USDC settlement on Solana" },
      { value: "30-120 days", label: "Asset-backed loan terms" },
      { value: "175,789", label: "FIDC fund-months in the risk model" },
    ],
  },
  thesis: {
    statement: [
      "Global capital wants asset-backed dollar yield. Local originators need funding.",
      "Missing: programmatic rails between them.",
    ],
    gaps: [
      { label: "$5.7T", caption: "Global MSME financing gap" },
      { label: "$1T", caption: "Latin America" },
      { label: "$680B", caption: "Brazil" },
    ],
    chartCaption: "Brazil is 68% of the Latin American gap. Areas to scale.",
    barriers: [
      {
        title: "The access barrier",
        body: "Foreign investors face local accounts, custody and one-off legal structures before earning anything.",
        figure: "~1 in 5",
        figureLabel: "dollars of tokenized private credit is a verified, transferable asset",
      },
      {
        title: "The risk barrier",
        body: "Money moves in seconds, but investors only see the collateral once a month.",
        figure: "67%",
        figureLabel: "of public FIDC fund-months show a null loss provision",
      },
    ],
  },
  protocol: {
    title: "Infrastructure and underwriting, unbundled.",
    lead: "Each party does the job it is best placed to do. Credit Markets runs the rails and never lends from its own balance sheet.",
    aria: "Three stacked layers: curators at the bottom, the Credit Markets protocol rails in the middle, allocators on top",
    layers: [
      { role: "Curators", who: "Local originators", body: "They underwrite, service the loans and put their own capital in first." },
      {
        role: "Credit Markets",
        who: "The protocol rails",
        body: "Vaults on Solana, the regulated legal structure, currency hedging and live collateral tracking.",
      },
      { role: "Allocators", who: "Institutional LPs", body: "Pick one curator's vault or a diversified mix. USDC in, dollar yield out." },
    ],
  },
  investors: {
    eyebrow: "For investors",
    title: "Asset-backed dollar yield, with loan-level proof.",
    lead: "Choose a curated vault and allocate in USDC. Each vault is isolated, so a default in one cannot spread to another.",
    points: [
      { title: "Dollar yield", body: "Deposit USDC and earn hedged dollar returns from Brazilian credit." },
      { title: "Backed by receivables", body: "Short-term credit to Brazilian businesses, with collateral registered locally." },
      { title: "Risk you can see", body: "Every payment is tracked on-chain, not reported in a monthly PDF." },
    ],
    cta: "Request investor access",
  },
  originators: {
    eyebrow: "For originators",
    title: "Run your own credit vault.",
    lead: "Credit Markets lets local originators act as institutional curators, with on-chain proof.",
    bringLabel: "You bring",
    bring: ["Your borrowers", "Your underwriting", "Your collections", "First-loss capital"],
    providesLabel: "The protocol provides",
    provides: ["Global investors", "The legal structure", "Dollar funding, hedged to reais", "Live reporting"],
    closing: "You keep the credit judgment. Credit Markets handles the rest.",
    cta: "Request originator access",
  },
  research: {
    eyebrow: "Research",
    title: "Notes on emerging-market credit.",
    all: "All research",
    read: "Read",
    error: "Research posts could not be loaded.",
    empty: "New research is on the way.",
    dateLocale: "en-US",
    score: {
      title: "FIDC market data",
      body: "Brazil's FIDC market from CVM monthly filings, with a market overview and a page for every fund.",
    },
  },
  team: {
    label: "Team",
    linkedin: "on LinkedIn",
  },
  register: {
    title: "Allocators and curators start here.",
    sub: "Register as an investor or an originator. The team replies by email.",
    direct: "Direct contact:",
    registeringAs: "Registering as",
    roles: {
      investor: {
        label: "Investor",
        intro: "Funds, family offices, treasuries and qualified investors seeking asset-backed dollar yield.",
      },
      originator: {
        label: "Originator",
        intro: "Brazilian lenders, fintechs and FIDC managers who want to run a curated vault.",
      },
    },
    fields: {
      name: "Full name",
      email: "Work email",
      company: "Company",
      country: "Country",
      type: "Investor type",
      typeInstitutional: "Institutional",
      typeIndividual: "Individual",
      allocation: "Expected allocation",
      volume: "Monthly origination volume",
      selectRange: "Select a range",
      telegram: "Telegram",
      telegramPlaceholder: "@handle",
      message: "Anything the team should know?",
      optional: "(optional)",
    },
    // Values are stored in English so the team sees one format; labels are translated.
    allocations: [
      { value: "Under $100K", label: "Under $100K" },
      { value: "$100K to $500K", label: "$100K to $500K" },
      { value: "$500K to $2M", label: "$500K to $2M" },
      { value: "Over $2M", label: "Over $2M" },
    ],
    volumes: [
      { value: "Under R$5M / month", label: "Under R$5M / month" },
      { value: "R$5M to R$20M / month", label: "R$5M to R$20M / month" },
      { value: "R$20M to R$100M / month", label: "R$20M to R$100M / month" },
      { value: "Over R$100M / month", label: "Over R$100M / month" },
    ],
    consent: { before: "By submitting, you agree to our", terms: "Terms of Service", and: "and", privacy: "Privacy Policy" },
    submit: "Request access",
    sending: "Sending",
    success: { thanks: "Thank you", body: "The team will reply by email to set up a first conversation." },
    duplicate: { title: "Already registered.", body: "The team has these details and will reply by email." },
    another: "Submit another registration",
    errors: {
      timeout: "The request timed out. Check the connection and try again.",
      network: "The server could not be reached. Check the connection and try again.",
      generic: "Submission failed. Please try again.",
      field: "",
    },
  },
  footer: { terms: "Terms", privacy: "Privacy" },
};

export type Copy = typeof en;

const pt: Copy = {
  meta: {
    htmlLang: "pt-BR",
    title: "Credit Markets | O protocolo modular de crédito da economia real",
    description:
      "Vaults de crédito curados e com risco isolado na Solana, com originação no Brasil e rendimento em dólar.",
  },
  nav: {
    links: { thesis: "Tese", protocol: "Protocolo", investors: "Investidores", originators: "Originadores", research: "Pesquisa" },
    cta: "Solicitar acesso",
    skip: "Pular para o conteúdo",
    home: "Página inicial da Credit Markets",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    switchTo: "EN",
    switchLabel: "View in English",
  },
  hero: {
    title: "O protocolo modular de crédito da economia real.",
    sub: "Vaults de crédito curados e com risco isolado na Solana, com originação local e rendimento em dólar.",
    cta: "Solicitar acesso",
    app: "Acessar o app",
    stats: [
      { value: "T+0", label: "Liquidação em USDC na Solana" },
      { value: "30-120 dias", label: "Prazo das operações com lastro" },
      { value: "175.789", label: "Informes mensais de FIDCs no modelo de risco" },
    ],
  },
  thesis: {
    statement: [
      "O capital global quer rendimento em dólar lastreado em ativos. Originadores locais precisam de funding.",
      "Falta: trilhos programáveis entre os dois.",
    ],
    gaps: [
      { label: "US$ 5,7 tri", caption: "Déficit global de crédito para MPMEs" },
      { label: "US$ 1 tri", caption: "América Latina" },
      { label: "US$ 680 bi", caption: "Brasil" },
    ],
    chartCaption: "O Brasil responde por 68% do déficit latino-americano. Áreas proporcionais.",
    barriers: [
      {
        title: "A barreira de acesso",
        body: "O investidor estrangeiro enfrenta conta local, custódia e estruturas jurídicas sob medida antes do primeiro retorno.",
        figure: "~20%",
        figureLabel: "do crédito privado tokenizado é um ativo verificado e transferível",
      },
      {
        title: "A barreira de risco",
        body: "O dinheiro se move em segundos, mas o investidor só vê o lastro uma vez por mês.",
        figure: "67%",
        figureLabel: "dos informes mensais de FIDCs registram PDD zerada",
      },
    ],
  },
  protocol: {
    title: "Infraestrutura e análise de crédito, desacopladas.",
    lead: "Cada parte faz o que sabe fazer melhor. A Credit Markets opera os trilhos e nunca empresta com capital próprio.",
    aria: "Três camadas empilhadas: curadores na base, os trilhos do protocolo Credit Markets no meio e alocadores no topo",
    layers: [
      { role: "Curadores", who: "Originadores locais", body: "Analisam o crédito, fazem a cobrança e assumem a primeira perda com capital próprio." },
      {
        role: "Credit Markets",
        who: "Os trilhos do protocolo",
        body: "Vaults na Solana, a estrutura jurídica regulada, hedge cambial e acompanhamento do lastro em tempo real.",
      },
      {
        role: "Alocadores",
        who: "Investidores institucionais",
        body: "Escolhem o vault de um curador ou uma carteira diversificada. Entra USDC, sai rendimento em dólar.",
      },
    ],
  },
  investors: {
    eyebrow: "Para investidores",
    title: "Rendimento em dólar com lastro e prova de cada operação.",
    lead: "Escolha um vault curado e aloque em USDC. Cada vault é isolado: a inadimplência de um não contamina os outros.",
    points: [
      { title: "Rendimento em dólar", body: "Deposite USDC e receba retorno em dólar, com hedge cambial, a partir de crédito brasileiro." },
      { title: "Lastro em recebíveis", body: "Crédito de curto prazo para empresas brasileiras, com garantias registradas localmente." },
      { title: "Risco visível", body: "Cada pagamento é registrado on-chain, não em um relatório mensal em PDF." },
    ],
    cta: "Solicitar acesso como investidor",
  },
  originators: {
    eyebrow: "Para originadores",
    title: "Opere o seu próprio vault de crédito.",
    lead: "A Credit Markets permite que originadores locais atuem como curadores institucionais, com prova on-chain.",
    bringLabel: "Você traz",
    bring: ["Seus tomadores", "Sua análise de crédito", "Sua cobrança", "Cota subordinada (primeira perda)"],
    providesLabel: "O protocolo oferece",
    provides: ["Investidores globais", "A estrutura jurídica", "Funding em dólar, convertido em reais com hedge", "Relatórios em tempo real"],
    closing: "Você mantém a decisão de crédito. A Credit Markets cuida do resto.",
    cta: "Solicitar acesso como originador",
  },
  research: {
    eyebrow: "Pesquisa",
    title: "Notas sobre crédito em mercados emergentes.",
    all: "Ver todas",
    read: "Ler",
    error: "Não foi possível carregar as publicações.",
    empty: "Novas publicações em breve.",
    dateLocale: "pt-BR",
    score: {
      title: "Dados do mercado de FIDCs",
      body: "O mercado brasileiro de FIDCs a partir dos informes mensais da CVM, com visão geral e uma página para cada fundo.",
    },
  },
  team: {
    label: "Equipe",
    linkedin: "no LinkedIn",
  },
  register: {
    title: "Alocadores e curadores: comece por aqui.",
    sub: "Cadastre-se como investidor ou originador. A equipe responde por e-mail.",
    direct: "Contato direto:",
    registeringAs: "Quero me cadastrar como",
    roles: {
      investor: {
        label: "Investidor",
        intro: "Fundos, family offices, tesourarias e investidores qualificados em busca de rendimento em dólar com lastro.",
      },
      originator: {
        label: "Originador",
        intro: "Financeiras, fintechs de crédito e gestoras de FIDC no Brasil que querem operar um vault curado.",
      },
    },
    fields: {
      name: "Nome completo",
      email: "E-mail corporativo",
      company: "Empresa",
      country: "País",
      type: "Tipo de investidor",
      typeInstitutional: "Institucional",
      typeIndividual: "Pessoa física",
      allocation: "Alocação prevista",
      volume: "Volume mensal de originação",
      selectRange: "Selecione uma faixa",
      telegram: "Telegram",
      telegramPlaceholder: "@usuario",
      message: "Algo que a equipe precisa saber?",
      optional: "(opcional)",
    },
    allocations: [
      { value: "Under $100K", label: "Até US$ 100 mil" },
      { value: "$100K to $500K", label: "US$ 100 mil a US$ 500 mil" },
      { value: "$500K to $2M", label: "US$ 500 mil a US$ 2 milhões" },
      { value: "Over $2M", label: "Acima de US$ 2 milhões" },
    ],
    volumes: [
      { value: "Under R$5M / month", label: "Até R$ 5 milhões / mês" },
      { value: "R$5M to R$20M / month", label: "R$ 5 a R$ 20 milhões / mês" },
      { value: "R$20M to R$100M / month", label: "R$ 20 a R$ 100 milhões / mês" },
      { value: "Over R$100M / month", label: "Acima de R$ 100 milhões / mês" },
    ],
    consent: { before: "Ao enviar, você concorda com os nossos", terms: "Termos de Serviço", and: "e com a nossa", privacy: "Política de Privacidade" },
    submit: "Solicitar acesso",
    sending: "Enviando",
    success: { thanks: "Obrigado", body: "A equipe vai responder por e-mail para marcar uma primeira conversa." },
    duplicate: { title: "Cadastro já existente.", body: "A equipe já tem seus dados e vai responder por e-mail." },
    another: "Enviar outro cadastro",
    errors: {
      timeout: "A requisição expirou. Verifique a conexão e tente novamente.",
      network: "Não foi possível conectar ao servidor. Verifique a conexão e tente novamente.",
      generic: "Não foi possível enviar. Tente novamente.",
      field: "Verifique este campo.",
    },
  },
  footer: { terms: "Termos", privacy: "Privacidade" },
};

export const content = { en, pt };
export type Lang = keyof typeof content;

// Path of the landing page in each language
export const LANG_HOME: Record<Lang, string> = { en: "/", pt: "/pt" };
