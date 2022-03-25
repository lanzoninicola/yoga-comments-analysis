export default class YouTubeSearchAPIMock {
  mockData = {
    kind: "youtube#searchListResponse",
    etag: "uyzXMiUFx8VP-FRxqE0q5a8m5zs",
    nextPageToken: "CDIQAA",
    regionCode: "BR",
    pageInfo: {
      totalResults: 244,
      resultsPerPage: 50,
    },
    items: [
      {
        kind: "youtube#searchResult",
        etag: "eTk-DMouI9pI1Y3e1u7CsUobm6w",
        id: {
          kind: "youtube#video",
          videoId: "VlP1NKXbZ5M",
        },
        snippet: {
          publishedAt: "2021-02-05T22:00:05Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Benefícios do Exercício Físico e Ganho de Massa Muscular",
          description:
            "No nosso organismo, tudo está interligado, mente e corpo são um só. Por isso, a prática de atividades físicas é tão importante.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/VlP1NKXbZ5M/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/VlP1NKXbZ5M/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/VlP1NKXbZ5M/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-02-05T22:00:05Z",
        },
      },
      /*
      {
        kind: "youtube#searchResult",
        etag: "-uOzXXk29uQdLoPn3RVjsAc6I6g",
        id: {
          kind: "youtube#video",
          videoId: "LzYGhl-cmYU",
        },
        snippet: {
          publishedAt: "2020-06-19T21:25:10Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Vermes e parasitas – Vontade de comer doce, o início de tudo",
          description:
            "No vídeo de hoje vamos falar sobre vermes e parasitas, quem são esses habitantes que nos fazem reféns? Confira as principais ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/LzYGhl-cmYU/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/LzYGhl-cmYU/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/LzYGhl-cmYU/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-06-19T21:25:10Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "F9y_HfD6y4gqN5PfgO3u3wZZC80",
        id: {
          kind: "youtube#video",
          videoId: "IoSOziHsoYE",
        },
        snippet: {
          publishedAt: "2021-02-19T22:00:03Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Como fazer uma reeducação alimentar?",
          description:
            "Muito mais que beleza e estética. Estamos falando de saúde. Se canse desse estilo de alimentação que prejudica sua vida.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/IoSOziHsoYE/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/IoSOziHsoYE/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/IoSOziHsoYE/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-02-19T22:00:03Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "3xVQKpQcLOcuzdx2NS2po5g_hDg",
        id: {
          kind: "youtube#video",
          videoId: "iQ_y2u_6bxA",
        },
        snippet: {
          publishedAt: "2019-07-19T21:01:11Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Dra. Katia Responde: Glúten, Leite e Zinco",
          description:
            "Um vídeo especial com respostas para algumas perguntas deixadas por vocês em nossas redes sociais - Youtube, Facebook, ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/iQ_y2u_6bxA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/iQ_y2u_6bxA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/iQ_y2u_6bxA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2019-07-19T21:01:11Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "jNm-nfLxTyOkgLaeY4aW59h_-j8",
        id: {
          kind: "youtube#video",
          videoId: "-AINZ_fpKbk",
        },
        snippet: {
          publishedAt: "2020-11-06T21:00:00Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title:
            "Creatinina, Saúde Renal, sobrecarga de Proteína e Hipertensão Arterial - Exames",
          description:
            "O exame de creatinina é usado para avaliar a função dos rins, portanto, é um item que se refere a qualidade da função renal.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/-AINZ_fpKbk/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/-AINZ_fpKbk/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/-AINZ_fpKbk/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-11-06T21:00:00Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "adefRywnm2aIef_dS4kM6aWomco",
        id: {
          kind: "youtube#video",
          videoId: "E8anBZB-Yvg",
        },
        snippet: {
          publishedAt: "2017-03-07T13:54:06Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Katia Haranaka fala sobre a água (Parte 1)",
          description:
            "A água é “energia vital” para o bom funcionamento do nosso organismo. O consumo de no mínimo três litros de água por dia ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/E8anBZB-Yvg/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/E8anBZB-Yvg/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/E8anBZB-Yvg/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2017-03-07T13:54:06Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "0x5ahobXvqkzCsxIpq8hI5DsFv8",
        id: {
          kind: "youtube#video",
          videoId: "L6VwIHKKM4Y",
        },
        snippet: {
          publishedAt: "2020-09-11T20:11:11Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Tudo o que você precisa saber sobre ácido mandélico",
          description:
            "Confira no vídeo de hoje o que é ácido mandélico, qual é a diferença entre ele e os outros ácidos e quais são seus benefícios!",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/L6VwIHKKM4Y/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/L6VwIHKKM4Y/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/L6VwIHKKM4Y/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-09-11T20:11:11Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "qZlJbLwVkcwH3BnYVH9iUeLYOZ8",
        id: {
          kind: "youtube#video",
          videoId: "rvCqvY1Q-Co",
        },
        snippet: {
          publishedAt: "2021-07-16T22:00:17Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Razões pelas quais você não consegue emagrecer",
          description:
            "Eu quero te ensinar a conciliar emagrecimento com saúde! Já adianto que não adianta buscar soluções imediatistas, porque ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/rvCqvY1Q-Co/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/rvCqvY1Q-Co/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/rvCqvY1Q-Co/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-07-16T22:00:17Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "K72qMpcsDAfB4J0D-hH-iqsKiJI",
        id: {
          kind: "youtube#video",
          videoId: "j2tmFSuOYy0",
        },
        snippet: {
          publishedAt: "2017-04-04T18:21:00Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Hormônio do bem-estar - Serotonina",
          description:
            "Ela é conhecida como o hormônio do bem-estar. A deficiência dessa substância provoca alterações negativas no sono, no humor ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/j2tmFSuOYy0/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/j2tmFSuOYy0/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/j2tmFSuOYy0/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2017-04-04T18:21:00Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "C-ioCpJ1Co2Tx8EWt4y0wYXEcGc",
        id: {
          kind: "youtube#video",
          videoId: "EdgZg_9VQjA",
        },
        snippet: {
          publishedAt: "2020-06-05T21:48:52Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title:
            "Por que beber Água? Hidratação da Pele das Pálpebra e Intestino Funcionando!",
          description:
            "Dra. Katia Haranaka - A importância da água Canal Oficial | Telegram | Dra. Katia Haranaka ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/EdgZg_9VQjA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/EdgZg_9VQjA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/EdgZg_9VQjA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-06-05T21:48:52Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "CgiDXCXKhFyUDag1mnqvvz7NHDs",
        id: {
          kind: "youtube#video",
          videoId: "qgi-1rBZjpg",
        },
        snippet: {
          publishedAt: "2019-09-06T12:00:11Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title:
            "Doenças Autoimunes - Lupus, psoríase, tireoide hashimoto, alopecia e artrite reumatoide",
          description:
            "Lupus, psoríase, tireoide hashimoto, alopecia e artrite reumatoide sãos algumas doenças autoimunes muito conhecidas. Você já ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/qgi-1rBZjpg/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/qgi-1rBZjpg/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/qgi-1rBZjpg/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2019-09-06T12:00:11Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "3wrIdrOHZ-NjYlbfRoWs17m1Jj0",
        id: {
          kind: "youtube#video",
          videoId: "NDkP6EOkWOI",
        },
        snippet: {
          publishedAt: "2021-10-15T22:00:18Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Esclarecendo a suplementação do ômega 3",
          description:
            "Dando sequência a nossa Web Série ter Beleza é ter Saúde: diminuir a inflamação é diminuir medidas e melhorar a performance ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/NDkP6EOkWOI/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/NDkP6EOkWOI/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/NDkP6EOkWOI/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-10-15T22:00:18Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "XavzyM1IovDLKjnHbMSFuFQZG9A",
        id: {
          kind: "youtube#video",
          videoId: "lFVKyAenC40",
        },
        snippet: {
          publishedAt: "2021-09-03T22:00:16Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "O hormônio T3: a bateria da vida",
          description:
            "Essa analogia, que expressa o T3 como uma bateria, significa que esse hormônio age como uma energia para que a célula ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/lFVKyAenC40/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/lFVKyAenC40/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/lFVKyAenC40/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-09-03T22:00:16Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "TUyNhXzihPK8xwvJ7PvbwITmGiQ",
        id: {
          kind: "youtube#video",
          videoId: "8FaZj_XWKqU",
        },
        snippet: {
          publishedAt: "2018-05-03T15:55:58Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Saiba tudo sobre Zinco Quelado e Vitamina D3",
          description:
            "Essenciais no desempenho de algumas funções do nosso organismo, o zinco quelado e a vitamina D3 são os temas dessa ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/8FaZj_XWKqU/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/8FaZj_XWKqU/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/8FaZj_XWKqU/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2018-05-03T15:55:58Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "lBE7FzqqEQN-XBojl7Tj92SETlk",
        id: {
          kind: "youtube#video",
          videoId: "iZM_yIFS2rw",
        },
        snippet: {
          publishedAt: "2020-11-20T21:00:06Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title:
            "FAN Positivo, o que é? (Doenças autoimunes: tudo está ligado à sua alimentação)",
          description:
            "O vídeo de hoje de nossa série de exames laboratoriais é sobre FAN! Muitos pacientes me perguntam, Dra. Katia o que significa ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/iZM_yIFS2rw/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/iZM_yIFS2rw/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/iZM_yIFS2rw/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-11-20T21:00:06Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "qg8EVNNFze9XQGYMleTGSBKv93w",
        id: {
          kind: "youtube#video",
          videoId: "rjcVPrsKySU",
        },
        snippet: {
          publishedAt: "2021-06-18T22:00:30Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title:
            "Ter um Cabelo Bonito - Como sua saúde em geral impacta no seu cabelo",
          description:
            "Você tem queda excessiva de cabelo? Ou está com cabelos brancos de forma precoce? Dando continuidade à nossa web série ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/rjcVPrsKySU/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/rjcVPrsKySU/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/rjcVPrsKySU/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-06-18T22:00:30Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "sCcnIduGjSjhOHUeAgV0vU1RWJU",
        id: {
          kind: "youtube#video",
          videoId: "0SVgl3u_Pqs",
        },
        snippet: {
          publishedAt: "2021-03-12T22:00:01Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Probióticos e Prebióticos - Benefícios e como suplementar",
          description:
            "Oi Gente! Vamos analisar as existências e diferenças de alimentos prebióticos e probióticos. Quais os benefícios que esse tipo ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/0SVgl3u_Pqs/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/0SVgl3u_Pqs/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/0SVgl3u_Pqs/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-03-12T22:00:01Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "ZBgkSq-9fiLXyUACLFeBY7oWcLs",
        id: {
          kind: "youtube#video",
          videoId: "HzRsJuccRLo",
        },
        snippet: {
          publishedAt: "2021-09-24T22:00:07Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Ter Tireoidite de Hashimoto é ter Hipotireoidismo?",
          description:
            "Na prática, a resposta para essa pergunta é sim. Enquanto as causas para essas duas doenças são completamente diferentes, ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/HzRsJuccRLo/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/HzRsJuccRLo/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/HzRsJuccRLo/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-09-24T22:00:07Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "wboER-34OkckPOjI8e02zfoa-KA",
        id: {
          kind: "youtube#video",
          videoId: "_frx2BuKOu0",
        },
        snippet: {
          publishedAt: "2021-12-01T22:00:28Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title:
            "Katia Responde - Suplementação para academia (Whey Protein, BCAA e Creatina)",
          description:
            'Neste vídeo do "Katia Responde" a Dra. Katia Haranaka esclarece dúvidas, responde perguntas e comentários feitos no vídeo ...',
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/_frx2BuKOu0/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/_frx2BuKOu0/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/_frx2BuKOu0/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-12-01T22:00:28Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "3xHfPDJRXWTCJoOyww-_1rDt8gM",
        id: {
          kind: "youtube#video",
          videoId: "LrkNBKC5u9Y",
        },
        snippet: {
          publishedAt: "2020-10-23T21:00:03Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Colesterol, HDL Alto e Triglicérides Baixo é saúde - Exames",
          description:
            "Oi gente! No vídeo de hoje vamos desmistificar os principais pontos sobre colesterol e entender a importância desse lipídio em ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/LrkNBKC5u9Y/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/LrkNBKC5u9Y/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/LrkNBKC5u9Y/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-10-23T21:00:03Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "17Hy1sOC1nQ-n8eOX50_ICdmXhw",
        id: {
          kind: "youtube#video",
          videoId: "wJc5Ra8hqRQ",
        },
        snippet: {
          publishedAt: "2021-08-27T22:00:17Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Iodo e Iodeto: quais são sua importância e benefícios",
          description:
            "Oi, gente! Por consequência da nossa distância do consumo de alimentos que possuem iodo, uma queda na qualidade de saúde ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/wJc5Ra8hqRQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/wJc5Ra8hqRQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/wJc5Ra8hqRQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-08-27T22:00:17Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "YTuyPp0qkoinkKorxLOGUyI9ac8",
        id: {
          kind: "youtube#video",
          videoId: "ccyGgIcv8tQ",
        },
        snippet: {
          publishedAt: "2021-02-26T22:00:05Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Suplementação para academia (Whey Protein, BCAA e Creatina)",
          description:
            "Whey Protein, BCAA e Creatina. O trio mais conhecido de todo frequentador de academia. Na verdade, a gente sempre fala.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/ccyGgIcv8tQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/ccyGgIcv8tQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/ccyGgIcv8tQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-02-26T22:00:05Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "k4gTBPK33f-TCXMLOMGOwpBcMAE",
        id: {
          kind: "youtube#video",
          videoId: "8MGKlgy8by0",
        },
        snippet: {
          publishedAt: "2021-04-30T22:00:02Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Menopausa: quais são os efeitos e causas",
          description:
            "Oi, Gente! Neste vídeo vamos falar tudo sobre esse tema importante que é a menopausa. Vamos falar sobre todas suas causas e ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/8MGKlgy8by0/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/8MGKlgy8by0/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/8MGKlgy8by0/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-04-30T22:00:02Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "-_AzIKteLBUYr6qU7k3TMkdNFSg",
        id: {
          kind: "youtube#video",
          videoId: "B87CM1n3o98",
        },
        snippet: {
          publishedAt: "2020-11-13T20:59:16Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title:
            "EXAMES: Ferritina, porque o ferro é tão importante em nosso sangue?",
          description:
            "Oi gente! Voltando com a nossa serie sobre exames de sangue, hoje falaremos sobre a ferritina. Todas as vezes que pedimos ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/B87CM1n3o98/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/B87CM1n3o98/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/B87CM1n3o98/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-11-13T20:59:16Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "52n0AtZgrx7Wv4NzvjiAOXvt-Dc",
        id: {
          kind: "youtube#video",
          videoId: "t4xpuBOUGWU",
        },
        snippet: {
          publishedAt: "2020-04-30T13:00:13Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Katia Responde - Pedras nos Rins",
          description:
            "Olá, mais um #KatiaResponde para você! Aqui a doutora Katia Haranaka tira as suas dúvidas sobre saúde, bem-estar e ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/t4xpuBOUGWU/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/t4xpuBOUGWU/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/t4xpuBOUGWU/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-04-30T13:00:13Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "nY4_v_Mt7FnkgBvcZZgFja9XXcM",
        id: {
          kind: "youtube#video",
          videoId: "n0b1p2prC2A",
        },
        snippet: {
          publishedAt: "2020-01-04T13:00:11Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Açúcar - Veneno Branco",
          description:
            "O primeiro vídeo de 2020 é uma alerta da Dra. Katia Haranaka para você sobre os perigos de algo doce: o açúcar. Ele pode se ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/n0b1p2prC2A/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/n0b1p2prC2A/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/n0b1p2prC2A/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-01-04T13:00:11Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "dN-bkU6uzY4D80vMMcAdKUX_TAs",
        id: {
          kind: "youtube#video",
          videoId: "46OiT5D2w2o",
        },
        snippet: {
          publishedAt: "2020-12-30T21:00:03Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Exames: Homocisteína e proteína C – ultra sensível",
          description:
            "Finalizando nossa sequência de vídeo de exames, neste conteúdo vamos aprender sobre Homocisteína e proteína C – reativa ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/46OiT5D2w2o/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/46OiT5D2w2o/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/46OiT5D2w2o/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-12-30T21:00:03Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "FOk1DedEbAQON2p_ITYCYYXXlck",
        id: {
          kind: "youtube#video",
          videoId: "AQ4tcy4ri1Q",
        },
        snippet: {
          publishedAt: "2020-10-16T21:05:00Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Entendendo os açúcares: açúcar faz mal?",
          description:
            "Você sabia que 50% de todo o açúcar que adquirimos através da alimentação é destinado ao cérebro? Entretanto, existem 29 ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/AQ4tcy4ri1Q/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/AQ4tcy4ri1Q/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/AQ4tcy4ri1Q/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-10-16T21:05:00Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "GWc0uIntvSv7A3i1frmmM16Kht4",
        id: {
          kind: "youtube#video",
          videoId: "Rm7rGIUzNDA",
        },
        snippet: {
          publishedAt: "2020-02-19T14:30:11Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title:
            "Sistemas Simpático e Parassimpático harmônicos podem controlar a ansiedade",
          description:
            "Os sistemas simpático e parassimpático existem para manter o corpo humano em equilíbrio. Um é responsável pelo estado de ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/Rm7rGIUzNDA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/Rm7rGIUzNDA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/Rm7rGIUzNDA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-02-19T14:30:11Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "OBgY1eGlTdCb9J_hAIQMbFHk2u4",
        id: {
          kind: "youtube#video",
          videoId: "x2SGW1ntOmQ",
        },
        snippet: {
          publishedAt: "2020-04-28T14:30:33Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Suplementação - Vitaminas e Minerais",
          description:
            "A suplementação de vitaminas e minerais é super importante para manter a saúde em dia. Nesse vídeo a Dra. Katia Haranaka dá ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/x2SGW1ntOmQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/x2SGW1ntOmQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/x2SGW1ntOmQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-04-28T14:30:33Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "PWDlxsvNclVcp37J_9v47iTQsEQ",
        id: {
          kind: "youtube#video",
          videoId: "rfktT1iHrLY",
        },
        snippet: {
          publishedAt: "2020-07-24T20:52:16Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Rotina de cuidados com a pele",
          description:
            "No vídeo de hoje daremos continuidade a rotina de cuidados com a pele, que consiste em limpar, hidratar, proteger e regenerar.",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/rfktT1iHrLY/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/rfktT1iHrLY/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/rfktT1iHrLY/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-07-24T20:52:16Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "kEeQf4SOCyr5pp2uI19xlfQzIaI",
        id: {
          kind: "youtube#video",
          videoId: "tp1aFbiw8No",
        },
        snippet: {
          publishedAt: "2022-01-12T22:15:01Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title:
            "Katia Responde - Diabetes, Glicemia, Hemoglobina Glicada e Insulina - Exames",
          description:
            'Neste vídeo do "Katia Responde" a Dra. Katia Haranaka esclarece dúvidas, responde perguntas e comentários feitos no vídeo ...',
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/tp1aFbiw8No/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/tp1aFbiw8No/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/tp1aFbiw8No/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2022-01-12T22:15:01Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "hyPudWhovHKp5UTYtcRqrKl1Vuk",
        id: {
          kind: "youtube#video",
          videoId: "eqKRiyRslrQ",
        },
        snippet: {
          publishedAt: "2022-02-16T22:00:12Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Katia Responde - Suplementação, Vitaminas e Minerais",
          description:
            'Neste vídeo do "Katia Responde" a Dra. Katia Haranaka esclarece dúvidas, responde perguntas e comentários feitos no vídeo ...',
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/eqKRiyRslrQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/eqKRiyRslrQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/eqKRiyRslrQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2022-02-16T22:00:12Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "-QlBJs1KMhNHzakRSlcdXXNT0rM",
        id: {
          kind: "youtube#video",
          videoId: "gAuH1Ul5wrI",
        },
        snippet: {
          publishedAt: "2020-12-11T21:00:09Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Exames: avaliação hepática",
          description:
            "No vídeo de hoje vamos falar sobre o exame de avaliação hepática. Os exames hepáticos têm como função detectar a presença ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/gAuH1Ul5wrI/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/gAuH1Ul5wrI/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/gAuH1Ul5wrI/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-12-11T21:00:09Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "ji5k_Mjz2fOydfsX040m9IhtJFk",
        id: {
          kind: "youtube#video",
          videoId: "r4brb9R2icc",
        },
        snippet: {
          publishedAt: "2021-12-29T03:00:17Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Katia Responde - Ter um Cabelo Bonito",
          description:
            'Neste vídeo do "Katia Responde" a Dra. Katia Haranaka esclarece dúvidas, responde perguntas e comentários feitos no vídeo ter ...',
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/r4brb9R2icc/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/r4brb9R2icc/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/r4brb9R2icc/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-12-29T03:00:17Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "8qusn8TFOr8kB6pmwJ6dJwpH4XQ",
        id: {
          kind: "youtube#video",
          videoId: "AzrsHEezvNQ",
        },
        snippet: {
          publishedAt: "2017-04-20T14:45:41Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Hormônio do bem-estar - Serotonina - Parte 2",
          description:
            "Ela é conhecida como o hormônio do bem-estar. A deficiência dessa substância provoca alterações negativas no sono, no humor ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/AzrsHEezvNQ/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/AzrsHEezvNQ/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/AzrsHEezvNQ/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2017-04-20T14:45:41Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "gV8EZNvreixU2v7d-Mn1BGHcAHE",
        id: {
          kind: "youtube#video",
          videoId: "7oixnd17GO8",
        },
        snippet: {
          publishedAt: "2020-08-28T21:52:00Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "O que eu faço de bom para mim como rotina?",
          description:
            "No vídeo de hoje daremos continuidade a nossa nova série sobre estilo de vida, onde irei falar sobre como podemos gerenciar a ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/7oixnd17GO8/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/7oixnd17GO8/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/7oixnd17GO8/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2020-08-28T21:52:00Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "swfiDSujcfcAZ74Rpou-utrv3l8",
        id: {
          kind: "youtube#video",
          videoId: "EdUNV0E3ShU",
        },
        snippet: {
          publishedAt: "2022-03-02T23:30:01Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Katia Responde - Colesterol, HDL Alto e Triglicérides Baixo",
          description:
            'Neste vídeo do "Katia Responde" a Dra. Katia Haranaka esclarece dúvidas, responde perguntas e comentários feitos no vídeo ...',
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/EdUNV0E3ShU/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/EdUNV0E3ShU/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/EdUNV0E3ShU/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2022-03-02T23:30:01Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "fSpNSwq04MGkxypmYaOcfjAvyN4",
        id: {
          kind: "youtube#video",
          videoId: "gCS_49Z2a_8",
        },
        snippet: {
          publishedAt: "2021-07-23T22:00:14Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Como combater o cansaço e a fadiga mental?",
          description:
            "Quero te ensinar sobre o cansaço e a fadiga que sentimos durante o dia. Será que ter isso é normal? Já te adianto que tudo ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/gCS_49Z2a_8/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/gCS_49Z2a_8/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/gCS_49Z2a_8/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-07-23T22:00:14Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "efLRAKG7-1OURIq5TdfIA043Eo0",
        id: {
          kind: "youtube#video",
          videoId: "WM9wdiYJRhA",
        },
        snippet: {
          publishedAt: "2021-07-09T20:43:56Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Saiba quais são os benefícios da reposição hormonal feminina",
          description:
            "Entrevista exclusiva da Dra. Katia Haranaka para a Band Mulher, falando sobre quais são os benefícios da reposição hormonal ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/WM9wdiYJRhA/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/WM9wdiYJRhA/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/WM9wdiYJRhA/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-07-09T20:43:56Z",
        },
      },
      {
        kind: "youtube#searchResult",
        etag: "71i4qdi_7JIuiQsjDPAgWDknsyA",
        id: {
          kind: "youtube#video",
          videoId: "TkDNv3YzRvg",
        },
        snippet: {
          publishedAt: "2021-01-08T21:00:06Z",
          channelId: "UCCcmNppYF2F6f1R4uWqhkCA",
          title: "Depressão: hormônios e do que você se alimenta",
          description:
            "Bem-estar, equilíbrio e felicidade são resultados de um alto nível de Serotonina. Descubra neste vídeo como aumentar o nível de ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/TkDNv3YzRvg/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/TkDNv3YzRvg/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/TkDNv3YzRvg/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "Katia Haranaka",
          liveBroadcastContent: "none",
          publishTime: "2021-01-08T21:00:06Z",
        },
      },
      */
    ],
  };

  constructor(cache) {
    this.cache = cache;
  }

  videos(action, params) {
    return new Promise((resolve) => {
      // const { channelId, pageToken } = params;

      // const cachedValue = this.cache.get(action, channelId, pageToken);

      // if (cachedValue) {
      //   resolve(cachedValue);
      // } else {
      //   this.cache.set(action, channelId, pageToken, this.mockData);
      //   resolve(this.mockData);
      // }

      this.mockData = {
        ...this.mockData,
        nextPageToken: this.randomPageToken(),
      };
      resolve(this.mockData);
    });
  }

  randomPageToken() {
    return Math.random().toString(36).substring(7);
  }
}
