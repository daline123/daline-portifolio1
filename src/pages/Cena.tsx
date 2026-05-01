import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageLayout from '../components/PageLayout';

interface TechnicalCredit {
  label: string;
  content: string;
}

interface Work {
  title: string;
  period?: string;
  description: string;
  href?: string;
  cover: string;
  images: string[];
  credits?: string | TechnicalCredit[];
}

const ALL_WORKS_DATA: Work[] = [
  {
    title: 'Lia Rodrigues Companhia De Danças',
    period: 'desde 2022',
    description:
      `Intérprete-criadora na Lia Rodrigues Companhia de Danças desde 2022, criou o espetáculo "Borda" em 2025 e dança também as peça "Encantado" e "Fúria". Através da companhia, já dançou em mais de 20 países e nos principais teatros do mundo como o Théâtre National Chaillot em Paris, Sandler's Wells em Londres e Sydney Opera House entre outros.`,
    cover: '/images/gallery/borda-capa.jpg',
    images: ['/images/gallery/02.jpg', '/images/gallery/03.jpg', '/images/gallery/lia-rodrigues-03.jpg', '/images/gallery/05.jpg', '/images/gallery/06.jpg'],
    credits: [
      {
        label: 'Borda - Ficha Técnica',
        content: `Criação: Lia Rodrigues
Dançado e criado em colaboração com: Leonardo Nunes, Valentina Fittipaldi, Andrey da Silva, David Abreu, Raquel Alexandre, Daline Ribeiro, João Alves, Cayo Almeida, Vitor de Abreu
Assistente de criação: Amália Lima
Dramaturgia: Silvia Soter
Colaboração artística e imagens: Sammi Landweer
Design de iluminação: Nicolas Boudier
Assistentes de iluminação: Magali Foubert, Baptistine Méral e Jimmy Wong
Trilha sonora: Miguel Bevilacqua (a partir de gravações da Missão de Pesquisa Folclórica de 1938 e trecho da música “Amor Amor Amor” de domínio público, interpretada por Luiz Paixão)
Mixagem e masterização: Ronaldo Gonçalves
Produção/difusão: Colette de Turville
Assistente de produção: Astrid Toledo
Produção e difusão Brasil: Gabi Gonçalves / Corpo Rastreado
Secretária/administrativa: Gloria Laureano
Apoio logístico Centro de Artes da Maré: Sendy Silva
Professores: Amália Lima, Leonardo Nunes, Valentina Fittipaldi, Andrey Silva
Figurinos: Lia Rodrigues Companhia de Danças
Estagiária: Cecília Carvalhosa
Costureira: Antônia Jardilino de Paiva
Agradecimentos: Thérèse Barbanel, Corpo Rastreado, Inês Assumpção, Luiz Assumpção, Diana Nassif, equipe do Centro de Artes da Maré, Jacques Segueilla
Dedicado a: Max Nassif Earp
Produção: Lia Rodrigues Companhia de Danças
Coprodução: Kunstenfestivaldesarts – Bruxelles / Maison de la danse – Pôle européen de criação, com apoio à Biennale de Lyon / Chaillot – Théâtre National de la Danse – Paris / Le CENTQUATRE – Paris / Festival d’Automne à Paris / Wiener Festwochen – Wien / La Bâtie – Festival de Genève – Comédie de Genève / Romaeuropa – Roma / PACT Zollverein – Essen / One Dance Festival – Plovdiv / Theater Freiburg / Muffatwerk – Münich / Passages Transfestival – Metz / Festival Perspectives – Saarbrücken / Le Parvis scène nationale Tarbes–Pyrénées / Tanz im August / HAU Hebbel am Ufer – Berlin / Théâtre Garonne – scène européenne – Toulouse / Le Lieu Unique – Scène nationale de Nantes (em residência na La Libre Usine)
Com o apoio de: Fondation Ammodo, Redes da Maré e Centro de Artes da Maré
Lia Rodrigues é Artista associada do teatro CENTQUATRE-PARIS / França e da Maison de la danse / Polo europeu de criação em parceria com a Biennale de la danse de Lyon / França`
      },
      {
        label: 'Encantado - Ficha Técnica',
        content: `Criação e direção: Lia Rodrigues
Dançado e criado em colaboração por: Leonardo Nunes, Valentina Fittipaldi, Andrey da Silva, Larissa Lima, Ricardo Xavier, David Abreu, Tiago Oliveira, Raquel Alexandre. Também dançado por Felipe Vian, Alice Alves, Daline Ribeiro
Colaboração na criação: Carolina Repetto, Joana Castro, Matheus Macena
Assistente de criação e direção: Amália Lima
Dramaturgia: Silvia Soter
Colaboração artística e imagens: Sammi Landweer
Criação de luz: Nicolas Boudier, com assistência técnica de Baptistine Méral e Magali Foubert
Trilha sonora/mixagem: Alexandre Seabra (a partir de trechos de músicas do povo Guarani Mbya/Aldeia de Kalipety da T.I. Tenondé Porã, cantadas e tocadas durante a marcha de povos indígenas em Brasília, em agosto e setembro de 2021, contra o “marco temporal”, uma medida inconstitucional que prejudica o presente e o futuro de todas as gerações dos povos indígenas.
Produção Brasil: Gabi Gonçalves/Corpo Rastreado
Iluminação (criação e operação) no Brasil: Jimmy Wong
Produção e difusão internacional: Colette de Turville, com assistência de Astrid Toledo
Administração França: Jacques Segueilla
Idealização e produção do projeto de apoio do Instituto Goethe: Claudia Oliveira
Secretária e administração: Glória Laureano
Professores: Amalia Lima, Sylvia Barretto, Valentina Fittipaldi
Uma coprodução de Scène nationale Carré-Colonnes; Le TAP – Théâtre Auditorium de Poitiers; Scène nationale du Sud-Aquitain; La Coursive – Scène nationale de La Rochelle; L’empreinte, Scène nationale Brive-Tulle; Théâtre d’Angoulême Scène Nationale; Le Moulin du Roc, Scène nationale à Niort; La Scène Nationale d’Aubusson; Kunstenfestivaldesarts (Brussels); Brussels, Theaterfestival (Basel); HAU Hebbel am Ufer (Berlin); Festival Oriente Occidente (Rovereto); Theater Freiburg; l’OARA – Office Artistique de la Région Nouvelle Aquitaine; Julidans (Amsterdam); Teatro Municipal do Porto; Festival DDD, dias de dança; Chaillot – Théâtre national de la Danse (Paris); Le CENTQUATRE-PARIS; e Festival d’Automne à Paris.
Com apoio de FONDOC (Occitanie)/França; Fundo Internacional de Ajuda para as Organizações de Cultura e Educação 2021 do Ministério das Relações Exteriores da República Federal da Alemanha, do Goethe-Institut e de outros parceiros; Fondation d’entreprise Hermès/França, com a parceria de France Culture.
Uma produção da Lia Rodrigues Companhia de Danças com apoio da Redes da Maré, da Campanha “A Maré diz não ao Coronavírus – projeto Conexão Saúde” e do Centro de Artes da Maré.
Lia Rodrigues é artista associada ao Chaillot-Théâtre national de la Danse e ao CENTQUATRE, França.
Agradecimentos: Thérèse Barbanel, Antoine Manologlou, Maguy Marin, Eliana Souza Silva, equipe do Centro de Artes da Maré.
Encantado é dedicado ao Oliver.`
      }
    ]
  },
  {
    title: 'True Rouge',
    period: '2023',
    description:
      `Performer na instauração True Rouge (1997) do artista Tunga no Instituto Inhotim com direção da Lia Rodrigues em Cia de Danças, no evento "Anoitecer Inhotim" (2023). "True Rouge" foi a primeira obra a integrar Inhotim, e periodicamente é ativada por bailarinos.`,
    cover: '/images/gallery/07.jpg',
    images: ['/images/gallery/07.jpg', '/images/gallery/true-rouge-02.jpg', '/images/gallery/true-rouge-03.jpg', '/images/gallery/true-rouge-04.jpg', '/images/gallery/true-rouge-05.jpg', '/images/gallery/true-rouge-06.jpg'],
    credits: `Fotografia: Leca Novo (Primeira foto) e Sammy Landweer (Fotos da instauração 2023 e bastidores)`
  },
  {
    title: 'E|N|T|R|E',
    period: '2016',
    description:
      `Intérprete-criadora do espetáculo de dança E|N|T|R|E (2016) de Datan Izaká. Além de uma temporada em Teresina, a peça teve apresentações no festival Modo de Existir- SESC Santo Amaro-SP e Festival Panorama-Rj. Foi o primeiro trabalho profissional como intérprete-criadora de Daline.`,
    cover: '/images/gallery/04.jpg',
    images: ['/images/gallery/04.jpg', '/images/gallery/entre-02.jpg'],
    credits: `Concepção e criação: Datan Izaká
Performers: Helen Mesquita, Daline Ribeiro e Ireno Gomes
Colaboração: Janaína Lobo, Jacob Alves, César Costa, Glenda Fontinele, Paulo Beltrão, Viviane Lopes, Layane Holanda e Eduardo Araújo
Fotografia: Victor Gabriel e Festival Panorama RJ
Design de Luz: Pablo Gomes
Design de Som: Sérgio Donato
Identidade visual: Sérgio Donato`
  },
  {
    title: 'As Cotas',
    period: '2022',
    description:
      `Diretora de movimento do videoclipe "As Cotas" da União Nacional dos Estudantes, um manifesto audiovisual que celebra os dez anos de implementação das Cotas no Brasil, que contou com grandes nomes da música brasileira como intérpretes como: Chico César, Leci Brandão, Mart'nália, Teresa Cristina, José Miguel Wisnik, Iara Rennó entre outros.`,
    href: 'https://www.youtube.com/watch?v=OBjDDV8S2qg',
    cover: '/images/gallery/as-cotas.jpg',
    images: ['/images/gallery/as-cotas-01.jpg', '/images/gallery/as-cotas-02.jpg', '/images/gallery/as-cotas-03.jpg', '/images/gallery/as-cotas-04.jpg'],
    credits: `Realização: União Nacional dos Estudantes
Direção: Fábio Bardella e Guilherme Martins
Produção: RealqualqueR
Roteiro: Fábio Bardella, Guilherme Martins e Camila Ribeiro
Assistente de Direção: Victor Xavier
Produção Executiva: Fábio Bardella
Direção de Movimento: Daline Ribeiro
Direção de Fotografia: Luiz Egídio
1º Assistente de Fotografia: Bruno Ramos (Ricows)
Operação Steady: Rubens Arantes
2º Assistente de Fotografia: Teruo Sakamoto
Fotografia DV: João Rúbio
Video assist: Isabell Tell
Montagem: Ana Carolina Vedovato e Fabio Bardella
Direção de Arte: Lueli Marks e Helena Dib
Assistente de Arte: Sven Beller
Coordenação de Figurino: Helena Dib
Figurinista: Jadson Maciel
Make e Cabelo: Jéssica Dias Gaffer: Kleber Bam Bam
Assistente de Produção: Jacob Alves
Assistente Elétrica: Ricardinho e Jonas
Luz e Maquinária: Fire Locação
Pós-Produção: Clandestino
Colorista: Alexandre Cristófaro e João Paulo Geraldo
Coordenador de Pós-Produção: Gabriel Alvim
Edição Online: Luiza Freire
Atendimento: Elciane Magda
Financeiro: Silvia Dotta
Administrativo: Gabrielle Dotta
Mídias Sociais: Carla Ribeiro
Supervisão Geral: Alexandre Cristófaro
Apoio: Monstercam

TRILHA SONORA Letra: Carlos Rennó
Música: Chico César
Intérpretes: Célia Xakriabá, Chico César, Djuena Tikuna, Edvan Fulni-ô, Fabiana Cozza, Flor Gil, Gilsons (Francisco Gil, João Gil, José Gil), Iara Rennó, José Miguel Wisnik, Leci Brandão, Leticia Sabatella, Martnália, Mc Soffia, Moreno Veloso, Monkeyjhayam, Owera, Teresa Cristina, Vitão
Produção Musical: Cris Scabello e Maurício Caetano
Direção Musical: Cris Scabello e Maurício Caetano
Produção Artística: Carlos Rennó
Técnicos de Som: Cris Scabello e Mauricio Caetano - Estúdio Traquitana (SP) Elton Bozza - Estúdio Palco (RJ)
Músicos: Cris Scabello (programação e baixo), Mauricio Caetano (programação e baixo), Marcelo Dworecki (baixo), Maurício Fleury (teclados), Daniel Gralha (trompete), Cuca Ferreira (sax tenor e sax barítono)
Mixagem: Cris Scabello e Maurício Caetano
Masterização: Leonardo Nakabayashi (Estúdio Banzai)
Backing Vocal: Jaque da Silva e Gabriel Vako
Elenco Principal: Bruna Brelaz, Gabriel Vako, Jade Beatriz, Rozana Barroso, Samela Satére mawé, Tamires Sampaio, Tel Guajajara
Movimentos: Céu Ancelmo, Cunanny Willians, Joel Carlos, Júlia Brandão, Letícia C. Brasil, Maia Caos, Odasilva, Victória Fonseca, Ysmael Ribeiro
Grupo de Capoeira Dragão do Mar: Amanda Rovere, Bianca Mondeja, Fabiano Avelin, Lucas Chen, Marcos Kauê Ferreira de Queiroz, Thayna Malta
Cortejo: União Nacional dos Estudantes, União Estadual dos Estudantes de São Paulo, União Paulistas dos Estudantes Secundaristas, União Brasileira de Mulheres, UNEAFRO
Locação: Faculdade de Direito da USP - Largo do São Francisco
Staff Faculdade de Direito da USP: Camilo de Lelis Funchal Junior, Eduardo Silva Marcio Cardoso Leal, Marisa Roza Soares Gonçalves, Valdemar Pereira de Santos Filho
Staff UNE Produção Executiva: Camila Ribeiro
Comunicação: Manuella Mirella, Bel Vale, Junior Lima
Assessoria de imprensa: Sara Puerta, Brenda Amaral
Administrativo: Marta Vicente, Joaci Agostinho
Motorista: Renato Tito

Fotografia de bastidores: Daline Ribeiro`
  },
  {
    title: 'Serestinha',
    period: '2025',
    description:
      `Ministra a oficina Serestinha, em que combina práticas de dança contemporânea, técnicas de composição e consciência corporal com as sonoridades das festas de serestas do Piauí. A oficina busca explorar como o repertório de movimento da nossa infância se expande e reflete na construção da nossa dança atual.`,
    cover: '/images/gallery/serestinha-capa.jpg',
    images: [
      '/images/gallery/09.jpg',
      '/images/gallery/10.jpg',
      '/images/gallery/serestinha-03.jpg',
      '/images/gallery/serestinha-04.jpg',
      '/images/gallery/serestinha-05.jpg',
    ],
    credits: `Fotografia: Victor Martins (Práticas de aula)`
  },
  {
    title: 'Catirinas',
    period: '2017',
    description: `Performer do espetáculo "Catirinas" (2017) de Weyla Carvalho com apresentação no Junta - Festival Internacional de Dança de Teresina 3ª edição. O espetáculo ressignifica a história de Catirina que é personagem principal na trama do bumba-meu-boi.`,
    cover: '/images/gallery/05.jpg',
    images: ['/images/gallery/05.jpg', '/images/gallery/10.jpg'],
    credits: `Concepção, Direção, Produção: Weyla Carvalho
Intérpretes: Bailarinos do projeto redemoinho/ Escola Estadual de Dança Lenir Argento: Cipó Alvarenga, Marcelinho Lopes, Décio Costa, Marcos Abner, Aline Guimarães, Daline Ribeiro, Mariana Nívea, Tulipa Braga, Laisla Santos, Iara Teixeira, Caroline Rodrigues, Sammya Tamires e Larissa Almeida junto com convidados: Hélio Alvarenga, Armando Cavalcante e Iriane Oliveira
Música: Sérgio Matos
Fotos: Maurício Pokemon`
  },
  {
    title: 'Ópera Serra Da Capivara (Ato Ancestral)',
    period: '2017',
    description:
      `Intérprete no espetáculo "Ato Ancestral" da primeira edição da Ópera na Serra da Capivara em São Raimundo Nonato em (2017). Com direção e criação de Datan Izaká e colaboração de Samuel Alvis. A Ópera na Serra da Capivara hoje é destaque no calendário cultural brasileiro.`,
    cover: '/images/gallery/08.jpg',
    images: ['/images/gallery/opera-01.jpg', '/images/gallery/opera-02.jpg'],
    credits: `Fotografia: Joaquim Neto (Foto 1) e Margareth Leite (Foto 2)`
  },
  {
    title: 'Pretaforma',
    period: '2021',
    description:
      `Idealizadora do PRETAFORMA- Plataforma para artistas negros e negras, em parceria com o artista Jacob Alves. O festival aconteceu de forma on-line em 2021, 46 artistas do Brasil e Moçambique compuseram a programação da primeira edição. O projeto contemplado pelo Prêmio Maria da Inglaterra/Lei Adir Blanc Estadual Piauí`,
    cover: '/images/gallery/pretaforma.jpg',
    images: ['/images/gallery/pretaforma-01.jpg', '/images/gallery/pretaforma-02.jpg', '/images/gallery/pretaforma-03.jpg'],
  },
  {
    title: 'Mostra De Artes Cênicas',
    period: '2019',
    description:
      `Coordenadora da Mostra de Artes Cênicas- 11ª Bienal da UNE Festival dos Estudantes. A Bienal é a maior vitrine das produções artísticas estudantis, participaram da 11ª edição 8 mil estudantes do Brasil inteiro. A mostra de Artes Cênicas contou com a curadoria de Maria Marighella e Adriana Bittencourt.`,
    cover: '/images/gallery/mostra-02.jpg',
    images: ['/images/gallery/mostra-02.jpg', '/images/gallery/mostra-01.jpg'],
  },
];

export default function Cena() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <PageLayout label="Cena" wide>
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="font-display font-medium text-3xl md:text-[44px] leading-[1.1] text-ink-primary mb-16 md:mb-24 lowercase"
      >
        Trabalhos Em Cena<br />
        <span className="font-normal text-ink-accent tracking-normal text-2xl md:text-3xl">Intérprete E Criadora.</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {ALL_WORKS_DATA.map((w, i) => (
          <WorkCard
            key={w.title}
            work={w}
            index={i}
            onClick={() => setSelectedWork(w)}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedWork && (
          <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
        )}
      </AnimatePresence>
    </PageLayout>
  );
}

function WorkCard({ work, index, onClick }: { work: Work; index: number; onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group text-left"
    >
      <div className="aspect-square overflow-hidden bg-bg-secondary mb-4 relative rounded-sm">
        <img
          src={work.cover}
          alt={work.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
      </div>
      <h3 className="font-display font-medium text-xl md:text-2xl text-ink-primary leading-tight">
        {work.title}
      </h3>
      {work.period && (
        <p className="text-[12px] uppercase tracking-wider text-ink-muted mt-1">
          {work.period}
        </p>
      )}
    </motion.button>
  );
}

function WorkModal({ work, onClose }: { work: Work; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const renderCreditsContent = (content: string) => {
    return (
      <div className="bg-bg-secondary p-8 rounded-lg mt-4 animate-fade-in-up">
        <pre className="whitespace-pre-wrap font-sans text-sm text-ink-body leading-relaxed">
          {content}
        </pre>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-bg-primary/95 backdrop-blur-md"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-bg-primary w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl border border-line-subtle rounded-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 text-ink-primary hover:text-ink-accent transition-colors bg-bg-primary/80 backdrop-blur rounded-full"
          aria-label="Fechar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-16">
          <div className="space-y-8">
            <div>
              <p className="label mb-4">{work.period}</p>
              <h2 className="font-display font-medium text-4xl md:text-5xl text-ink-primary leading-tight">
                {work.title}
              </h2>
            </div>
            
            <p className="text-ink-body text-lg leading-relaxed">
              {work.description}
            </p>

            {work.href && (
              <a
                href={work.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-3 text-ink-accent hover:gap-4 transition-all uppercase text-sm tracking-widest font-medium"
              >
                Ver projeto online <span>→</span>
              </a>
            )}

            {/* Technical Credits Section */}
            {work.credits && (
              <div className="pt-12 border-t border-line-subtle">
                <p className="label mb-6 text-ink-primary font-bold uppercase tracking-widest">Ficha Técnica</p>
                
                {Array.isArray(work.credits) ? (
                  <div className="space-y-4">
                    {work.credits.map((cred, idx) => (
                      <div key={idx}>
                        <button
                          onClick={() => setActiveTab(activeTab === idx ? null : idx)}
                          className="w-full text-left py-4 flex justify-between items-center group border-b border-line-subtle/50"
                        >
                          <span className="font-display text-lg text-ink-body group-hover:text-ink-primary transition-colors">
                            {cred.label}
                          </span>
                          <span className={`text-xl transition-transform duration-300 ${activeTab === idx ? 'rotate-45' : ''}`}>
                            +
                          </span>
                        </button>
                        {activeTab === idx && renderCreditsContent(cred.content)}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => setActiveTab(activeTab === 0 ? null : 0)}
                      className="w-full text-left py-4 flex justify-between items-center group border-b border-line-subtle/50"
                    >
                      <span className="font-display text-lg text-ink-body group-hover:text-ink-primary transition-colors">
                         Ver Ficha Técnica Completa
                      </span>
                      <span className={`text-xl transition-transform duration-300 ${activeTab === 0 ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>
                    {activeTab === 0 && renderCreditsContent(work.credits)}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="space-y-6">
            {work.images.map((img, i) => (
              <div key={i} className="aspect-video md:aspect-[4/3] bg-bg-secondary overflow-hidden rounded">
                <img
                  src={img}
                  alt={`${work.title} - ${i + 1}`}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
