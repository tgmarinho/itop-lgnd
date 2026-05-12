import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Demonstração",
  description:
    "Tour pelo sistema ITOP — gestão completa de eventos, inscrições, dashboards, check-in e mais.",
};

type Chapter = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  stack: string[];
  shots: { src: string; alt: string; caption?: string }[];
};

const chapters: Chapter[] = [
  {
    id: "discovery",
    number: "01",
    title: "Descoberta de Eventos",
    subtitle: "Landing pública com hero, próximos e encerrados",
    description:
      "Página inicial pública lista todos os eventos disponíveis em carrosséis segmentados. Hero destaca eventos em alta, com SSR no App Router do Next 14 e tRPC server-side para zero-waterfall.",
    highlights: [
      "Server Components com data fetching paralelo",
      "Carrosséis acessíveis com Embla + autoplay",
      "OG/SEO otimizados por evento",
    ],
    stack: ["Next.js 14 App Router", "tRPC", "Tailwind", "Embla Carousel"],
    shots: [
      {
        src: "/demo-screenshots/1-home-listagem-dos-eventos-pagina-do-itop.png",
        alt: "Home com listagem dos eventos",
        caption: "Home pública — hero + próximos + encerrados",
      },
      {
        src: "/demo-screenshots/2-tickets.png",
        alt: "Tickets disponíveis",
        caption: "Tickets ativos exibidos no header da home",
      },
    ],
  },
  {
    id: "public-event",
    number: "02",
    title: "Página Pública do Evento",
    subtitle: "Página de inscrição com identidade visual configurável",
    description:
      "Cada evento tem uma landing page própria, customizável pelo organizador: capa, descrição rica, regras, cronograma, termos e rodapé. Inclui meta tags dinâmicas para compartilhamento.",
    highlights: [
      "Editor rich-text (Tiptap) para descrições",
      "Layouts responsivos com identidade do evento",
      "Termos e políticas versionados por evento",
    ],
    stack: ["Tiptap", "Zod", "Next Metadata API"],
    shots: [
      {
        src: "/demo-screenshots/8-pagina-publicada-do-evento.png",
        alt: "Página pública do evento — topo",
      },
      {
        src: "/demo-screenshots/9-pagina-publicada-do-evento-com-mais-info.png",
        alt: "Página pública do evento — detalhes",
      },
      {
        src: "/demo-screenshots/10-pagina-publicada-do-evento-rodape.png",
        alt: "Página pública do evento — rodapé",
      },
    ],
  },
  {
    id: "org-events",
    number: "03",
    title: "Organização & Lista de Eventos",
    subtitle: "Multi-tenant com seleção de organização por slug",
    description:
      "Após o login, o organizador escolhe a organização e acessa a lista de eventos sob sua gestão. Permissões via CASL garantem isolamento entre orgs e papéis.",
    highlights: [
      "Multi-tenant via slug em URL e cookie",
      "RBAC com CASL (Admin, Manager, Staff)",
      "Membership com convite por email",
    ],
    stack: ["CASL", "NextAuth", "Prisma multi-tenant"],
    shots: [
      {
        src: "/demo-screenshots/3-after-login-as-event-organizer-selecoinando-organizacao.png",
        alt: "Seleção de organização após login",
      },
      {
        src: "/demo-screenshots/4-lista-de-eventos-para-organizacao-selecionada.png",
        alt: "Lista de eventos da organização",
      },
    ],
  },
  {
    id: "event-edit",
    number: "04",
    title: "Criação e Edição de Evento",
    subtitle: "Formulários complexos com validação tipada",
    description:
      "Wizard completo para criar/editar eventos: dados gerais, datas, capacidade, termos de aceite e configurações avançadas (lotes, faixas etárias, gênero, REM). Tudo validado com Zod e tipos compartilhados entre client e server via tRPC.",
    highlights: [
      "Forms com react-hook-form + Zod resolver",
      "Editor de termos com versionamento",
      "Configurações por tipo de evento (TOP, REM, Ladies, Hakuna)",
    ],
    stack: ["react-hook-form", "Zod", "tRPC", "Tiptap"],
    shots: [
      {
        src: "/demo-screenshots/15-edicao-criar-evento-novo.png",
        alt: "Criar novo evento",
      },
      {
        src: "/demo-screenshots/11-edicao-do-evento.png",
        alt: "Edição do evento",
      },
      {
        src: "/demo-screenshots/12-edicao-do-evento.png",
        alt: "Edição do evento — continuação",
      },
      {
        src: "/demo-screenshots/13-edicao-do-evento-termos-de-aceite-inscricao-evento.png",
        alt: "Termos de aceite",
      },
      {
        src: "/demo-screenshots/14-edicao-configuracao-do-evento.png",
        alt: "Configurações avançadas",
      },
    ],
  },
  {
    id: "dashboards",
    number: "05",
    title: "Dashboards Operacionais",
    subtitle: "Visão geral, financeiro e vendas em tempo real",
    description:
      "Três dashboards integrados para o organizador: status geral do evento (capacidade, check-in, cancelados), financeiro (PIX, cartão, cupons, descontos) e vendas (funis, conversão, ticket médio). Gráficos com Recharts e agregações no Postgres.",
    highlights: [
      "KPIs com refresh sob demanda",
      "Recharts customizado com tema do app",
      "Agregações Prisma com cache via tRPC",
    ],
    stack: ["Recharts", "Prisma aggregations", "tRPC"],
    shots: [
      {
        src: "/demo-screenshots/5-dashboard-visao-geral-do-evento-status.png",
        alt: "Dashboard — visão geral",
      },
      {
        src: "/demo-screenshots/6-dashboard-financeiro.png",
        alt: "Dashboard financeiro",
      },
      {
        src: "/demo-screenshots/7-dashboard-vendas.png",
        alt: "Dashboard de vendas",
      },
    ],
  },
  {
    id: "ops",
    number: "06",
    title: "Operação do Evento",
    subtitle: "Inscritos, check-in via QR, cupons e link secreto",
    description:
      "Suite operacional: lista de inscritos com filtros e busca, check-in manual e via QR Code (com câmera no PWA), gestão de cupons de desconto e link secreto para inscrições privadas/cortesias.",
    highlights: [
      "Tabela com TanStack Table (paginação, ordenação, filtros)",
      "Leitor de QR no navegador via @yudiel/react-qr-scanner",
      "Cupons com regras (percentual, fixo, limite de uso, validade)",
      "Link secreto com token único e revogável",
    ],
    stack: ["TanStack Table", "QR Scanner", "PWA", "nanoid"],
    shots: [
      {
        src: "/demo-screenshots/16-lista-inscritos-filtros-search-infos.png",
        alt: "Lista de inscritos",
      },
      {
        src: "/demo-screenshots/17-pagina-de-checkin-manual-qrcode.png",
        alt: "Check-in via QR Code",
      },
      {
        src: "/demo-screenshots/18-criacao-listagem-cupom-de-desconto-para-evento.png",
        alt: "Cupons de desconto",
      },
      {
        src: "/demo-screenshots/19-link-secreto-para-formulario-inscricao.png",
        alt: "Link secreto",
      },
    ],
  },
  {
    id: "team",
    number: "07",
    title: "Time & Permissões",
    subtitle: "Convites, papéis e configurações da organização",
    description:
      "Convite de novos membros por email com escolha de papel (Admin, Manager, Staff). Cada papel tem permissões específicas aplicadas tanto no client (UI condicional) quanto no server (tRPC procedures protegidas por CASL).",
    highlights: [
      "Convite por email com magic link (NextAuth)",
      "RBAC consistente client + server (CASL)",
      "Auditoria de mudanças de papel",
    ],
    stack: ["CASL", "NextAuth Email Provider", "Resend"],
    shots: [
      {
        src: "/demo-screenshots/20-organizacao-configuracao.png",
        alt: "Configuração da organização",
      },
      {
        src: "/demo-screenshots/21-convidar-novo-membro-para-gerir-evento-em-nivel-de-papel-permissao.png",
        alt: "Convidar membro",
      },
      {
        src: "/demo-screenshots/22-atribuicao-permissao-membro-do-evento.png",
        alt: "Atribuição de permissão",
      },
    ],
  },
];

const techStack = [
  "Next.js 14 (App Router)",
  "TypeScript",
  "tRPC",
  "Prisma + PostgreSQL",
  "NextAuth.js",
  "Tailwind CSS + shadcn/ui",
  "CASL (RBAC)",
  "react-hook-form + Zod",
  "TanStack Query & Table",
  "Recharts",
  "Tiptap",
  "Inngest (jobs)",
  "Resend (e-mail)",
  "Asaas / Woovi (pagamentos)",
  "UploadThing / Vercel Blob",
  "PWA + QR Scanner",
];

export default function DemoPage() {
  return (
    <div className="relative flex flex-col gap-16 pb-24 pt-28">
      <Section className="flex flex-col gap-6">
        <Badge variant="outline" className="w-fit">
          Modo Demonstração — somente leitura
        </Badge>
        <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
          Plataforma <span className="text-primary">ITOP</span> — gestão
          completa de eventos
        </h1>
        <p className="max-w-3xl text-balance text-lg text-muted-foreground">
          Tour por um SaaS multi-tenant de inscrições para grandes eventos:
          inscrições online, pagamentos, check-in via QR, dashboards
          operacionais, RBAC e PWA. Construído como portfólio de skills de{" "}
          <strong className="text-foreground">produto</strong> e{" "}
          <strong className="text-foreground">engenharia</strong>.
        </p>

        <Card className="max-w-2xl border-primary/40 bg-primary/5">
          <CardContent className="pt-6 text-sm text-muted-foreground">
            Este tour usa screenshots reais do produto, sem necessidade de
            login. Para explorar a plataforma em produção, entre em contato.
          </CardContent>
        </Card>

        <div className="flex flex-wrap gap-2 pt-2">
          {techStack.map((t) => (
            <Badge key={t} variant="secondary" className="font-normal">
              {t}
            </Badge>
          ))}
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-1 pt-4 text-sm">
          {chapters.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="text-muted-foreground transition hover:text-primary"
            >
              {c.number}. {c.title}
            </a>
          ))}
        </nav>
      </Section>

      <Separator className="mx-auto max-w-screen-xl" />

      {chapters.map((chapter) => (
        <Section
          key={chapter.id}
          id={chapter.id}
          className="flex scroll-mt-24 flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="font-mono text-primary">{chapter.number}</span>
              <span>{chapter.subtitle}</span>
            </div>
            <h2 className="text-3xl font-bold">{chapter.title}</h2>
            <p className="max-w-3xl text-muted-foreground">
              {chapter.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card className="bg-card/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase tracking-wide text-muted-foreground">
                  Destaques
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-2 text-sm">
                  {chapter.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="text-primary">▹</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-card/60">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm uppercase tracking-wide text-muted-foreground">
                  Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {chapter.stack.map((s) => (
                    <Badge key={s} variant="outline" className="font-normal">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-6">
            {chapter.shots.map((shot) => (
              <figure
                key={shot.src}
                className="overflow-hidden rounded-lg border border-border bg-muted/30"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={2796}
                  height={1680}
                  className="h-auto w-full"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                {shot.caption && (
                  <figcaption className="border-t border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground">
                    {shot.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </Section>
      ))}

      <Separator className="mx-auto max-w-screen-xl" />

      <Section className="flex flex-col items-start gap-4">
        <h2 className="text-2xl font-bold">Quer ver mais?</h2>
        <p className="max-w-2xl text-muted-foreground">
          O sistema completo inclui ainda módulos de famílias, saúde, entrega
          de bonés, geração de PDFs com termos assinados, integração com
          WhatsApp (Evolution API), webhooks de pagamento (Asaas/Woovi),
          notificações push (Web Push) e jobs durables com Inngest. Posso
          mostrar ao vivo em uma conversa.
        </p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/">Voltar para a Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/auth/signin">Tela de Login</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
