export interface DadosCliente {
  nome: string;
  razaoSocial?: string;
  slogan?: string;
  descricao: string;
  logo: {
    texto: string;
    subtexto?: string;
    horizontalUrl: string;
    verticalUrl: string;
    icone?: string;
  };
  cores: {
    primary: string; // Verde oliva escuro Arboville (#4B5E26 / #3D4F1E)
    primaryHover: string;
    secondary: string; // Verde floresta profundo / grafite
    accent: string; // Laranja terroso da marca (#E67817 / #D96B14)
    accentHover: string;
    darkGreen: string;
    lightBg: string; // #FAFAF9
    mutedBg: string;
    textPrimary: string; // #1F2937
    textSecondary: string; // #4B5563
    footerBg: string; // #1B2416
    footerBottomBg: string; // #12190E
  };
  localizacao: {
    cidade: string;
    estado: string;
    endereco: string;
    latitude: number;
    longitude: number;
    pais: string;
  };
  contato: {
    telefone: string;
    telefoneFormatado: string;
    whatsapp: string;
    whatsappFormatado: string;
    email: string;
    horarioAtendimento?: string;
  };
  hero: {
    badge?: string;
    titulo: string;
    subtitulo: string;
    botaoTexto: string;
    botaoLink: string;
    imagemFundo: string;
  };
  historia: {
    titulo: string;
    destaque: string;
    paragrafo1: string;
    paragrafo2: string;
    botaoTexto: string;
    botaoLink: string;
    imagemUrl: string;
    imagemAlt: string;
  };
  carreirasBanner: {
    titulo: string;
    paragrafo1: string;
    paragrafo2: string;
    botaoTexto: string;
    botaoLink: string;
    imagemFundo: string;
  };
  servicosGrid: {
    titulo: string;
    subtitulo?: string;
    items: Array<{
      id: string;
      titulo: string;
      descricao?: string;
      imagemUrl: string;
      link: string;
      icone?: string;
    }>;
  };
  servicosBrochure: {
    tagSuperior: string;
    titulo: string;
    subtitulo: string;
    itens: Array<{
      id: string;
      numero: string;
      titulo: string;
      badge: string;
      subtitulo: string;
      descricao: string;
      alerta: string;
      botaoTexto: string;
      mensagemWhatsapp: string;
      imagemUrl: string;
      icone: string;
      diferenciais: string[];
    }>;
  };
  recursos: {
    titulo: string;
    cards: Array<{
      id: string;
      titulo: string;
      tipo: "noticias" | "faq" | "podcast";
      icone: string;
      linkTexto: string;
      linkUrl: string;
      imagemFundo?: string;
    }>;
  };
  ctaContato: {
    titulo: string;
    descricao: string;
    botaoTexto: string;
    botaoLink: string;
    imagemFundo: string;
  };
  newsletter: {
    titulo: string;
    subtitulo: string;
    segmentos: Array<{
      id: string;
      titulo: string;
      descricao: string;
      icone: string;
      botaoTexto: string;
      tipo: "residencial" | "comercial" | "ambiental";
    }>;
  };
  navegacaoHeader: {
    barraSuperior: Array<{
      titulo: string;
      href: string;
    }>;
    itensPrincipais: Array<{
      titulo: string;
      href: string;
      temDropdown?: boolean;
    }>;
  };
  rodape: {
    colunas: Array<{
      titulo: string;
      links: Array<{
        titulo: string;
        href: string;
      }>;
    }>;
    sobreEmpresa: string;
    enderecoLinhas: string[];
    redesSociais: Array<{
      rede: string;
      icone: string;
      url: string;
    }>;
    linksLegais: Array<{
      titulo: string;
      href: string;
    }>;
    copyright: string;
  };
}

export const dadosCliente: DadosCliente = {
  nome: "Arboville Ltda",
  razaoSocial: "Arboville Ltda",
  slogan: "Poda e Cuidados com a Árvore",
  descricao: "Soluções completas e certificadas em manejo e poda de árvores, supressão de vegetação, corte de árvores isoladas, execução de PRAD e transplante arbóreo em Joinville e região.",
  logo: {
    texto: "ARBOVILLE",
    subtexto: "Poda e Cuidados com a Árvore",
    horizontalUrl: "/logo-arboville-2.svg",
    verticalUrl: "/logo-arboville-2.svg",
    icone: "trees",
  },
  cores: {
    primary: "#445922", // Verde oliva escuro Arboville (WCAG AA com fundo claro)
    primaryHover: "#354619",
    secondary: "#1E2A16", // Verde floresta profundo corporativo
    accent: "#E27412", // Laranja terroso/dourado vibrante da marca
    accentHover: "#C86109",
    darkGreen: "#2B3A15",
    lightBg: "#FAFAF9", // Branco levemente quente conforme manual
    mutedBg: "#F3F4F1",
    textPrimary: "#1F2937", // Cinza chumbo escuro para leitura confortável
    textSecondary: "#4B5563", // Cinza médio
    footerBg: "#1B2416",
    footerBottomBg: "#12190E",
  },
  localizacao: {
    cidade: "Joinville",
    estado: "SC",
    endereco: "Rua Julio Stolf 170",
    latitude: -26.3045,
    longitude: -48.8487,
    pais: "Brasil",
  },
  contato: {
    telefone: "47992156469",
    telefoneFormatado: "(47) 99215-6469",
    whatsapp: "5547992156469",
    whatsappFormatado: "(47) 99215-6469",
    email: "contato@arboville.com.br",
    horarioAtendimento: "Segunda a Sexta das 08h às 18h",
  },
  navegacaoHeader: {
    barraSuperior: [

      { titulo: "Fale pelo WhatsApp", href: "https://wa.me/5547992156469?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20com%20a%20Arboville" },
    ],
  itensPrincipais: [
    { titulo: "Início", href: "/", temDropdown: false },
    { titulo: "Sobre a Arboville", href: "#sobre", temDropdown: false },
    { titulo: "Serviços", href: "/servicos2#catalogo-servicos", temDropdown: false },
    { titulo: "Carreiras", href: "#carreiras", temDropdown: false },
    { titulo: "Recursos", href: "#recursos", temDropdown: false },
    { titulo: "Contato", href: "#contato", temDropdown: false },
  ],
  },
  hero: {
    titulo: "Excelência técnica em\nmanejo, poda e cuidados com árvores",
    subtitulo: "Segurança operacional, equipe certificada e respeito às normas ambientais para serviços residenciais, comerciais, industriais e urbanos.",
    botaoTexto: "SOLICITAR ORÇAMENTO HOJE",
    botaoLink: "https://wa.me/5547992156469?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Arboville",
    imagemFundo: "/images/hero3-1200x630.jpg",
  },
  historia: {
    titulo: "Arboville Ltda:\nCompromisso técnico, segurança\ne responsabilidade ambiental.",
    destaque: "Equipe especializada. Equipamentos de ponta. Atendimento certificado.",
    paragrafo1: "A Arboville é uma empresa que vai além dos negócios, pois tem como base valores como respeito, conhecimento, conscientização ambiental e unidade familiar. Ela se dedica não apenas à execução de serviços, mas também a contextualizar e conscientizar sobre a importância de preservar o ambiente.\n\nA empresa acredita que suas ações têm impactos mais amplos, influenciando comunidades e o ecossistema local. Além disso, a Arboville incentiva o envolvimento prático para um mundo mais sustentável.",
    paragrafo2: "",
    botaoTexto: "CONHEÇA A ARBOVILLE",
    botaoLink: "#sobre",
    imagemUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sobre-1-1-1CFVWJ37njRhZUx5iN2s3wiL3ykbQH.jpg",
    imagemAlt: "Serviços Arboville: Poda de árvores, Manejo de árvores, Supressão de Vegetação e Corte de árvores Isoladas",
  },
  carreirasBanner: {
    titulo: "Junte-se à nossa equipe e cresça com a Arboville!",
    paragrafo1: "Buscamos profissionais comprometidos com a segurança do trabalho, respeito ao meio ambiente e qualidade técnica. Proporcionamos constante treinamento, equipamentos certificados e plano de carreira estruturado.",
    paragrafo2: "Se você tem paixão por arboricultura, botânica ou operações florestais, venha fazer parte de um time que valoriza a vida e o desenvolvimento sustentável.",
    botaoTexto: "TRABALHE NA ARBOVILLE",
    botaoLink: "https://wa.me/5547992156469?text=Ol%C3%A1%2C%20gostaria%20de%20enviar%20meu%20curr%C3%ADculo%20para%20a%20Arboville",
    imagemFundo: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=2000&q=80",
  },
  servicosGrid: {
    titulo: "Principais Serviços e Equipe Especializada",
    subtitulo: "Soluções técnicas personalizadas com emissão de ART e conformidade ambiental",
    items: [
      {
        id: "manejo-arvores",
        titulo: "Manejo de árvores",
        descricao: "Avaliação fitossanitária, manutenção preventiva e diagnóstico da saúde de espécies arbóreas.",
        imagemUrl: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1000&q=80",
        link: "https://wa.me/5547992156469?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Manejo%20de%20%C3%A1rvores",
        icone: "tree-pine",
      },
      {
        id: "poda-arvores",
        titulo: "Poda de árvores",
        descricao: "Podas de contenção, limpeza, conformação e desobstrução de redes elétricas e telhados com segurança.",
        imagemUrl: "/images/servico-poda-arvores.png",
        link: "https://wa.me/5547992156469?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Poda%20de%20%C3%A1rvores",
        icone: "scissors",
      },
      {
        id: "supressao-vegetacao",
        titulo: "Supressão de Vegetação",
        descricao: "Limpeza técnica e supressão autorizada de vegetação para obras, loteamentos e infraestrutura.",
        imagemUrl: "/images/servico-supressao-vegetacao.png",
        link: "https://wa.me/5547992156469?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Supress%C3%A3o%20de%20Vegeta%C3%A7%C3%A3o",
        icone: "axe",
      },
      {
        id: "corte-arvores-isoladas",
        titulo: "Corte de árvores isoladas",
        descricao: "Remoção controlada e segura de espécimes em risco de queda, com técnica de escalada e caminhão munk.",
        imagemUrl: "/images/servico-corte-arvores.png",
        link: "https://wa.me/5547992156469?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Corte%20de%20%C3%A1rvores%20isoladas",
        icone: "shield-alert",
      },
      {
        id: "execucao-prad",
        titulo: "Execução de PRAD",
        descricao: "Plano de Recuperação de Áreas Degradadas, plantio de mudas nativas e recomposição florestal.",
        imagemUrl: "/images/servico-prad.png",
        link: "https://wa.me/5547992156469?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Execu%C3%A7%C3%A3o%20de%20PRAD",
        icone: "sprout",
      },
      {
        id: "transplante-arvores",
        titulo: "Transplante de árvores",
        descricao: "Remanejamento e transplante técnico de espécimes de grande porte com preservação do sistema radicular.",
        imagemUrl: "/images/servico-transplante.png",
        link: "https://wa.me/5547992156469?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20Transplante%20de%20%C3%A1rvores",
        icone: "move-3d",
      },
    ],
  },
  servicosBrochure: {
    tagSuperior: "CATÁLOGO TÉCNICO DE SERVIÇOS",
    titulo: "Soluções Especializadas em Manejo & Engenharia Florestal",
    subtitulo: "Segurança operacional máxima, equipe treinada em conformidade com as NRs e compromisso com as exigências dos órgãos ambientais.",
    itens: [
      {
        id: "manejo-de-arvores",
        numero: "01",
        titulo: "Manejo de Árvores",
        badge: "Gestão Integral & Laudos",
        subtitulo: "O manejo de árvores é essencial para garantir a segurança de estruturas e a saúde da vegetação em áreas urbanas, rurais e industriais.",
        descricao: "Nosso serviço de manejo arbóreo atua na gestão integral de espécies, incluindo avaliação técnica de risco, diagnóstico phytossanitário e intervenções preventivas. Trabalhamos em total conformidade com a legislação ambiental para evitar acidentes, quedas de galhos sobre redes elétricas e danos ao patrim��nio.",
        alerta: "Árvores sem acompanhamento técnico representam um risco silencioso e constante. Uma tempestade ou vendaval pode causar acidentes graves e gerar severas responsabilizações civis e criminais. Proteger sua propriedade e as pessoas ao redor é uma necessidade urgente.",
        botaoTexto: "AGENDAR VISTORIA TÉCNICA IMEDIATA",
        mensagemWhatsapp: "Olá! Gostaria de agendar uma vistoria técnica imediata para Manejo de Árvores com a equipe da Arboville.",
        imagemUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
        icone: "TreePine",
        diferenciais: [
          "Avaliação fitossanitária e análise de risco biomecânico",
          "Diagnóstico preventivo para condomínios, indústrias e áreas públicas",
          "Emissão de laudos e responsabilidade técnica (ART)",
          "Prevenção contra quedas de galhos em redes elétricas e edificações",
        ],
      },
      {
        id: "poda-de-arvores",
        numero: "02",
        titulo: "Poda de Árvores",
        badge: "Poda Técnica & Corretiva",
        subtitulo: "A poda de árvores realizada por leigos pode comprometer a estrutura da planta e criar riscos sérios de acidentes para sua propriedade.",
        descricao: "Oferecemos serviço especializado de poda técnica, corretiva, de limpeza e de adequação para áreas urbanas e privadas. Executamos a remoção segura de galhos secos, doentes ou que interferem na fiação elétrica e edificações, sempre respeitando a fisiologia da árvore e as normas ambientais vigentes.",
        alerta: "Um galho instável sobre sua casa ou empresa pode ceder a qualquer momento, provocando prejuízos incalculáveis e interrompendo suas atividades. Não corra riscos desnecessários; a prevenção precisa acontecer antes do sinistro.",
        botaoTexto: "SOLICITAR PODA COM EQUIPE QUALIFICADA",
        mensagemWhatsapp: "Olá! Preciso solicitar a poda técnica de árvores com a equipe qualificada da Arboville.",
        imagemUrl: "/images/servico-poda-arvores.png",
        icone: "Scissors",
        diferenciais: [
          "Técnicas modernas de poda de conformação, desobstrução e limpeza",
          "Trabalho seguro em altura (NR-35) e arborismo técnico",
          "Preservação da arquitetura e vigor biológico da copa",
          "Trituração e destinação ambientalmente correta dos galhos",
        ],
      },
      {
        id: "supressao-de-vegetacao",
        numero: "03",
        titulo: "Supressão de Vegetação",
        badge: "Obras, Loteamentos & Indústrias",
        subtitulo: "A supressão de vegetação para obras, empreendimentos e loteamentos exige planejamento rigoroso e cumprimento estrito das exigências ambientais.",
        descricao: "Atuamos na supressão vegetal legalizada para abertura de áreas, construção civil e projetos infraestruturais. Garantimos execução ágil e segura com maquinário adequado, alinhada às autorizações do órgão ambiental competente e às normas de manejo responsável.",
        alerta: "Tentar realizar o desmatamento ou a limpeza de terreno sem licença e execução técnica adequada pode paralisar sua obra, gerar multas milionárias e embargo definitivo do projeto. A conformidade ambiental é uma necessidade crítica para a continuidade do seu empreendimento.",
        botaoTexto: "REGULARIZAR E EXECUTAR PROJETO",
        mensagemWhatsapp: "Olá! Gostaria de falar com especialistas sobre Supressão de Vegetação para meu empreendimento.",
        imagemUrl: "/images/servico-supressao-vegetacao.png",
        icone: "Axe",
        diferenciais: [
          "Execução 100% legalizada conforme autorização de corte (AuC)",
          "Frota própria de tratores, escavadeiras e trituradores florestais",
          "Abertura rápida e segura de áreas para construção civil",
          "Acompanhamento de engenheiro florestal e equipe técnica",
        ],
      },
      {
        id: "corte-de-arvores-isoladas",
        numero: "04",
        titulo: "Corte de Árvores Isoladas",
        badge: "Abate Controlado em Espaços Confinados",
        subtitulo: "O corte de árvores isoladas é uma medida extrema e necessária quando a árvore apresenta risco iminente de queda ou compromete obras.",
        descricao: "Realizamos a remoção e o abate controlado de árvores isoladas de pequeno, médio e grande porte. Utilizamos técnicas avançadas de amarração e corte para garantir que a remoção ocorra com total segurança, sem impactar estruturas vizinhas, fiação elétrica ou transeuntes.",
        alerta: "Uma árvore condenada ou em posição de risco é uma ameaça real para a integridade de todos. Esperar o inevitável pode custar vidas e causar danos patrimoniais irreversíveis. A remoção imediata é a única atitude responsável.",
        botaoTexto: "SOLICITAR ATENDIMENTO RÁPIDO E SEGURO",
        mensagemWhatsapp: "Olá! Tenho uma árvore isolada com risco de queda e preciso de corte controlado seguro com a Arboville.",
        imagemUrl: "/images/servico-corte-arvores.png",
        icone: "ShieldAlert",
        diferenciais: [
          "Desmontagem em seções com rigging e tirolesas técnicas",
          "Intervenção em pátios estreitos e sobre coberturas sem danos",
          "Equipamentos de elevação, caminhão munck e motosserristas qualificados",
          "Atendimento prioritário para situações de perigo iminente",
        ],
      },
      {
        id: "execucao-de-prad",
        numero: "05",
        titulo: "Execução de PRAD",
        badge: "Plano de Recuperação de Áreas Degradadas",
        subtitulo: "A Execução de PRAD (Plano de Recuperação de Áreas Degradadas) é requisito indispensável para a regularização de passivos ambientais e cumprimento de licenças.",
        descricao: "Somos especialistas na implementação técnica de PRAD, incluindo preparo do solo, isolamento da área, controle de erosão e plantio de mudas nativas. Garantimos o acompanhamento biológico necessário para o sucesso do reflorestamento e o atendimento pleno às notificações do órgão ambiental.",
        alerta: "O descumprimento de prazos do PRAD acarreta sanções severas, interdição de atividades e penalidades diárias. Regularizar a situação ambiental do seu imóvel não é opcional; é uma exigência urgente para proteger suas operações e seu patrimônio.",
        botaoTexto: "EXECUTAR PRAD COM ESPECIALISTAS",
        mensagemWhatsapp: "Olá! Preciso da execução técnica de PRAD para regularizar minha área com a Arboville.",
        imagemUrl: "/images/servico-prad.png",
        icone: "Sprout",
        diferenciais: [
          "Plantio sistemático de mudas nativas com alta taxa de pegamento",
          "Técnicas de contenção de encostas e bioengenharia de solos",
          "Manutenção e monitoramento periódico de crescimento",
          "Elaboração de relatórios conclusivos para desoneração do passivo",
        ],
      },
      {
        id: "transplante-de-arvores",
        numero: "06",
        titulo: "Transplante de Árvores",
        badge: "Preservação e Resgate de Espécimes Nobres",
        subtitulo: "O transplante de árvores é a solução perfeita para preservar espécimes valiosos ou centenários que precisam ser movidos devido a novas construções.",
        descricao: "Nosso serviço de transplante arbóreo envolve o destocamento técnico, preservação do terrão, poda de adequação e o transporte seguro até o novo local de plantio. Aplicamos técnicas específicas para garantir a máxima taxa de sobrevivência do vegetal e rápida adaptação ao novo solo.",
        alerta: "Destruir árvores de grande porte pode gerar entraves licitatórios e perdas irreversíveis. O transplante viabiliza o seu projeto respeitando a legislação e mantendo o valor paisagístico do seu imóvel. A preservação inteligente exige ação técnica antes do início das escavações.",
        botaoTexto: "AGENDAR AVALIAÇÃO PARA TRANSPLANTE",
        mensagemWhatsapp: "Olá! Gostaria de agendar uma avaliação técnica para transplante e preservação de árvores.",
        imagemUrl: "/images/servico-transplante.png",
        icone: "Move",
        diferenciais: [
          "Preservação do torrão radicular com hidratação e hormônios enraizadores",
          "Logística especial com içamento e amarração acolchoada",
          "Poda de equilíbrio foliar prévia para redução de estresse hídrico",
          "Acompanhamento agronômico pós-plantio até fixação definitiva",
        ],
      },
    ],
  },
  recursos: {
    titulo: "Notícias, orientações técnicas e recursos",
    cards: [
      {
        id: "noticias",
        titulo: "Mantenha-se atualizado com a Arboville",
        tipo: "noticias",
        icone: "newspaper",
        linkTexto: "Acompanhe as novidades do setor",
        linkUrl: "#noticias",
        imagemFundo: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "faq",
        titulo: "Dúvidas frequentes sobre\nautorização e poda de árvores",
        tipo: "faq",
        icone: "message-square-more",
        linkTexto: "Consulte nosso guia de dúvidas",
        linkUrl: "#faq",
        imagemFundo: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80",
      },
      {
        id: "podcast",
        titulo: "Segurança Operacional &\nNormas Ambientais na Prática",
        tipo: "podcast",
        icone: "mic",
        linkTexto: "Conheça nossas diretrizes técnicas",
        linkUrl: "#seguranca",
        imagemFundo: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=800&q=80",
      },
    ],
  },
  ctaContato: {
    titulo: "Precisa de Poda ou Manejo Florestal? Fale Conosco!",
    descricao: "Na Arboville Ltda, oferecemos atendimento ágil, laudos precisos e equipes certificadas em Joinville e região. Fale agora com nossos especialistas e receba um orçamento personalizado.",
    botaoTexto: "SOLICITAR ORÇAMENTO VIA WHATSAPP",
    botaoLink: "https://wa.me/5547992156469?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Arboville",
    imagemFundo: "/images/cta-floresta.jpg",
  },
  newsletter: {
    titulo: "Receba nossas orientações e novidades técnicas",
    subtitulo: "Fique por dentro dos calendários de poda, legislação ambiental de Joinville/SC e boas práticas de manejo.",
    segmentos: [
      {
        id: "residencial",
        titulo: "Residencial & Condomínios",
        descricao: "Orientações sobre podas preventivas, segurança patrimonial e manutenção de jardins.",
        icone: "stethoscope-tree",
        botaoTexto: "FALAR COM ESPECIALISTA",
        tipo: "residencial",
      },
      {
        id: "comercial",
        titulo: "Empresas & Indústrias",
        descricao: "Soluções corporativas, desobstrução de áreas e adequação de pátios operacionais.",
        icone: "building-2",
        botaoTexto: "ATENDIMENTO CORPORATIVO",
        tipo: "comercial",
      },
      {
        id: "ambiental",
        titulo: "PRAD & Licenciamento",
        descricao: "Laudos técnicos, supressão de vegetação com ART e recuperação de áreas degradadas.",
        icone: "bird",
        botaoTexto: "CONSULTORIA AMBIENTAL",
        tipo: "ambiental",
      },
    ],
  },
  rodape: {
    colunas: [
      {
        titulo: "Serviços Arboville",
        links: [
          { titulo: "Manejo de árvores", href: "#servicos" },
          { titulo: "Poda de árvores", href: "#servicos" },
          { titulo: "Supressão de Vegetação", href: "#servicos" },
          { titulo: "Corte de árvores isoladas", href: "#servicos" },
        ],
      },
      {
        titulo: "Especialidades",
        links: [
          { titulo: "Execução de PRAD", href: "#servicos" },
          { titulo: "Transplante de árvores", href: "#servicos" },
          { titulo: "Laudos Fitossanitários", href: "#contato" },
          { titulo: "Emergências Arbóreas", href: "#contato" },
        ],
      },
      {
        titulo: "Setores Atendidos",
        links: [
          { titulo: "Residências e Condomínios", href: "#residencial" },
          { titulo: "Empresas e Indústrias", href: "#comercial" },
          { titulo: "Empreendimentos Imobiliários", href: "#servicos" },
        ],
      },
      {
        titulo: "Responsabilidade",
        links: [
          { titulo: "Normas de Segurança (EPIs)", href: "#seguranca" },
          { titulo: "Conformidade Ambiental", href: "#ambiental" },
          { titulo: "Compensação Florestal", href: "#servicos" },
        ],
      },
      {
        titulo: "Sobre a Empresa",
        links: [
          { titulo: "História da Arboville", href: "#sobre" },
          { titulo: "Nossa Equipe", href: "#sobre" },
          { titulo: "Trabalhe Conosco", href: "#carreiras" },
          { titulo: "Fale Conosco", href: "#contato" },
        ],
      },
      {
        titulo: "Atendimento Rápido",
        links: [
          { titulo: "WhatsApp: (47) 99215-6469", href: "https://wa.me/5547992156469" },
          { titulo: "Telefone: (47) 99215-6469", href: "tel:47992156469" },
          { titulo: "E-mail: contato@arboville.com.br", href: "mailto:contato@arboville.com.br" },
        ],
      },
      {
        titulo: "Localização",
        links: [
          { titulo: "Rua Julio Stolf 170", href: "#contato" },
          { titulo: "Joinville - SC", href: "#contato" },
          { titulo: "Atendimento em toda a região", href: "#contato" },
        ],
      },
    ],
    sobreEmpresa: "Arboville Ltda\nPoda e Cuidados com a Árvore\nRua Julio Stolf 170\nJoinville/SC",
    enderecoLinhas: [
      "Arboville Ltda",
      "Poda e Cuidados com a Árvore",
      "Rua Julio Stolf 170",
      "Joinville - SC",
      "WhatsApp / Tel: (47) 99215-6469",
    ],
    redesSociais: [
      { rede: "WhatsApp", icone: "whatsapp", url: "https://wa.me/5547992156469" },
      { rede: "Instagram", icone: "instagram", url: "https://instagram.com" },
      { rede: "Facebook", icone: "facebook", url: "https://facebook.com" },
      { rede: "LinkedIn", icone: "linkedin", url: "https://linkedin.com" },
    ],
    linksLegais: [
      { titulo: "Política de Privacidade", href: "#privacidade" },
      { titulo: "Termos de Serviço", href: "#termos" },
      { titulo: "Conformidade Ambiental", href: "#ambiental" },
      { titulo: "Contato e Orçamentos", href: "#contato" },
    ],
    copyright: "© 2026 Arboville Ltda. Poda e Cuidados com a Árvore. Todos os Direitos Reservados. Joinville/SC.",
  },
};

