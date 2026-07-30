export const dummyCode = `
\\documentclass[12pt,a4paper]{article}

\\usepackage{amsmath, amssymb, amsthm}
\\usepackage{geometry}
\\geometry{top=2.5cm, bottom=2.5cm, left=2.8cm, right=2.8cm}

\\usepackage{tikz}
\\usetikzlibrary{angles, quotes, arrows.meta, patterns, calc}

\\usepackage{fontspec}
\\setmainfont{Sylfaen}

\\usepackage{titlesec}
\\titleformat{\\section}{\\Large\\bfseries\\centering}{\\thesection.}{0.6em}{}[\\vspace{0.2em}\\hrule\\vspace{0.4em}]
\\titleformat{\\subsection}{\\large\\bfseries}{\\thesubsection.}{0.5em}{}
\\titleformat{\\subsubsection}{\\normalsize\\bfseries\\itshape}{}{0em}{}

\\usepackage{enumitem}
\\setlist[enumerate]{itemsep=0.3em, topsep=0.5em}

\\usepackage{hyperref}
\\hypersetup{
  colorlinks=true,
  linkcolor=black,
  urlcolor=black,
  pdftitle={კდწდ — სრული სახელმძღვანელო},
  pdfauthor={ანურ გორადალოვი}
}

\\usepackage{cancel}
\\usepackage{fancyhdr}
\\setlength{\\headheight}{14pt}
\\pagestyle{fancy}
\\fancyhf{}
\\fancyhead[L]{\\small\\itshape კერძო წარმოებულებიანი დიფ.\\ განტოლებები}
\\fancyhead[R]{\\small\\itshape ანურ გორადალოვი}
\\fancyfoot[C]{\\thepage}
\\renewcommand{\\headrulewidth}{0.4pt}

\\setlength{\\parindent}{0pt}
\\setlength{\\parskip}{0.55em}

% ── გარემოები ────────────────────────────────────────────────────
\\newenvironment{problem}[1]{%
  \\vspace{0.4em}
  \\noindent\\rule{\\textwidth}{0.5pt}\\\\[0.1em]
  \\textbf{#1}\\\\[0.2em]
}{\\vspace{0.2em}}

\\newenvironment{solution}{%
  \\smallskip\\noindent\\textit{ამოხსნა:}\\par\\smallskip
}{}

%================================================================
\\begin{document}

% ----------------------------------------------------------------
% სათაური
% ----------------------------------------------------------------
\\thispagestyle{empty}
\\vspace*{4.5cm}

\\begin{center} 
    % Üst xətt
    \\rule{\\textwidth}{1.6pt}\\vspace*{-\\baselineskip}\\vspace*{2pt}
    \\rule{\\textwidth}{0.4pt}\\\\[0.5cm]
    
    % Başlıq
    \\huge \\textbf{კერძო წარმოებულებიანი დიფერენციალური განტოლებები} \\\\[0.3cm]
    \\Large \\textbf{შუალედური ბილეთები, ბილეთებში შემავალი თეორემები, პრაქტიკული
ნაწილის თეორიული საფუძვლები და ამოხსნები} \\\\[0.5cm]
    
    % Alt xətt
    \\rule{\\textwidth}{0.4pt}\\vspace*{-\\baselineskip}\\vspace{3.2pt}
    \\rule{\\textwidth}{1.6pt}
    
    \\vspace{1cm}
    \\large \\textit{ანურ გორადალოვი} 
\\end{center}
\\newpage
\\thispagestyle{empty}

\\noindent\\textbf{შენიშვნა:} ამ სახელმძღვანელოში წარმოდგენილი თითოეული ამოცანა შეესაბამება შუალედური გამოცდის ბილეთის 5-ქულიან პრაქტიკულ კითხვას. 

\\vspace{1em}
\\tableofcontents

\\newpage
\\pagenumbering{arabic}
\\setcounter{page}{1}

% ================================================================
\\section{კითხვა 2 — მეორე რიგის კერძო წარმოებულები}
% ================================================================

\\subsection*{საფუძვლიანი თეორიული შესავალი}

\\subsubsection*{კერძო წარმოებული — რა არის ეს?}

ორი ცვლადის ფუნქცია $f(x, y)$ შეგვიძლია ვიფიქროთ ისე, რომ ერთ ცვლადს ვანელებთ,
მეორე კი ვამაგრებთ.

$\\dfrac{\\partial f}{\\partial x}$ ნიშნავს: $y$-ს მუდმივად ვიჭერთ,
$x$-ს ვაცვლათ — ვუვლით ჩვეულებრივ დიფერენციირებას.

$\\dfrac{\\partial f}{\\partial y}$ ნიშნავს: $x$-ს მუდმივად ვიჭერთ,
$y$-ს ვაცვლათ.

\\subsubsection*{ჯაჭვის წესი (Chain Rule) — ძირითადი ინსტრუმენტი}

თუ გვაქვს შედგენილი ფუნქცია $g(h(x))$, მის წარმოებულს ვიღებთ ასე:
\\[
  \\frac{d}{dx}\\bigl[g(h(x))\\bigr] = g'(h(x)) \\cdot h'(x)
\\]

\\textbf{კონკრეტული შემთხვევა — ხარისხი:}
\\[
  \\frac{\\partial}{\\partial x}(x^2+y^2)^{\\alpha}
  = \\alpha(x^2+y^2)^{\\alpha-1}\\cdot 2x
\\]
აქ $h(x)=x^2+y^2$, $h'(x)=2x$ (რადგან $y$ მუდმივია).

\\textbf{ნამრავლის წარმოებულის წესი (Leibniz rule):}
\\[
  \\frac{\\partial}{\\partial x}\\bigl[u(x)\\cdot v(x)\\bigr]
  = u'(x)\\cdot v(x) + u(x)\\cdot v'(x)
\\]

\\textbf{ნამრავლის წარმოებულის (Leibniz rule) მაგალითი:}

განვიხილოთ ფუნქცია, სადაც $x$ ცვლადი შედის ორ სხვადასხვა მამრავლში:
\\[
  f(x, y) = x^3 \\cdot \\ln(x^2 + y)
\\]
აქ $u(x) = x^3$ და $v(x) = \\ln(x^2 + y)$. $x$-ით გაწარმოებისას ვიყენებთ ნამრავლის წესს:
\\[
  \\frac{\\partial f}{\\partial x} = \\underbrace{3x^2}_{u'} \\cdot \\underbrace{\\ln(x^2 + y)}_{v} + \\underbrace{x^3}_{u} \\cdot \\underbrace{\\frac{2x}{x^2+y}}_{v'}
\\]
გამარტივების შემდეგ: 
\\[
  \\frac{\\partial f}{\\partial x} = 3x^2 \\ln(x^2 + y) + \\frac{2x^4}{x^2+y}
\\]

\\subsubsection*{მეორე რიგის შერეული წარმოებული}
$\\dfrac{\\partial^2 f}{\\partial x\\,\\partial y}$ ითვლება ორ ნაბიჯად:
\\begin{enumerate}
  \\item ჯერ ვიღებთ $\\dfrac{\\partial f}{\\partial y}$ — ვდიფერენცირებთ $y$-ს მიხედვით,
  \\item შემდეგ მიღებული გამოსახულება ვდიფერენცირებთ $x$-ს მიხედვით.
\\end{enumerate}
ზოგადად, რაც არ უნდა ბევრი იყოს წარმოებული, დიფერენცირება ყოველ\\-თვის სრულდება თანმიმდევრულად მარჯვნიდან მარცხნივ (ანუ იმ ცვლა\\-დი\\-დან, რომელიც უშუალოდ ფუნქციასთანაა).


\\subsubsection*{შერეული წარმოებულის გამოთვლა (მაგალითი)}

ავიღოთ ფუნქცია $f(x, y) = x^2 y + e^{xy}$ და გამოვთვალოთ $\\dfrac{\\partial^2 f}{\\partial x \\partial y}$ თანმიმდევრულად:

\\begin{enumerate}
  \\item \\textbf{ნაბიჯი 1:} ჯერ ვაწარმოებთ $y$-ის მიხედვით (ამ დროს $x$ მუდმივია):
  \\[
    \\frac{\\partial f}{\\partial y} = x^2 \\cdot 1 + e^{xy} \\cdot x = x^2 + x e^{xy}
  \\]
  \\item \\textbf{ნაბიჯი 2:} მიღებულ შედეგს ვაწარმოებთ $x$-ის მიხედვით:
  \\[
    \\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial}{\\partial x} (x^2 + x e^{xy}) = 2x + \\left( 1 \\cdot e^{xy} + x \\cdot y e^{xy} \\right)
  \\]
\\end{enumerate}
საბოლოო სახე: $\\dfrac{\\partial^2 f}{\\partial x \\partial y} = 2x + e^{xy}(1 + xy)$.

$\\dfrac{\\partial^2 f}{\\partial x^2}$ ნიშნავს: ვდიფერენცირებთ $x$-ს
მიხედვით ორჯერ (ნამრავლის წესის გამოყენებით).

\\subsubsection*{ძირითადი ფორმულა}

$r^2 = x^2+y^2$ ან $r^2=x^2+y^2+z^2$ ტიპის ფუნქციებისთვის:
\\[
  \\frac{\\partial}{\\partial x}(r^2)^{\\alpha}
  = \\alpha(r^2)^{\\alpha-1}\\cdot 2x,
  \\qquad
  \\frac{\\partial}{\\partial y}(r^2)^{\\alpha}
  = \\alpha(r^2)^{\\alpha-1}\\cdot 2y
\\]


\\subsubsection*{მეორე რიგის წარმოებული $(r^2)^{\\alpha}$ ტიპის ფუნქციებისთვის}

თუ $f = (r^2)^{\\alpha}$, მისი მეორე რიგის წარმოებული $x$-ით მოითხოვს ნამრავლის წესის ხელახლა გამოყენებას. პირველი წარმოებულიდან ვიცით:
\\[
  \\frac{\\partial}{\\partial x}(r^2)^{\\alpha} = 2\\alpha x (r^2)^{\\alpha-1}
\\]
მეორე რიგის წარმოებულისთვის ვაწარმოებთ $x$-ით $2\\alpha x$-ს და $(r^2)^{\\alpha-1}$-ს:
\\[
  \\frac{\\partial^2}{\\partial x^2}(r^2)^{\\alpha} = \\frac{\\partial}{\\partial x} \\left[ 2\\alpha x \\cdot (r^2)^{\\alpha-1} \\right]
\\]
\\[
  = 2\\alpha (r^2)^{\\alpha-1} + 2\\alpha x \\cdot \\left[ (\\alpha-1)(r^2)^{\\alpha-2} \\cdot 2x \\right]
\\]
გამარტივების შემდეგ მივიღებთ:
\\[
  \\frac{\\partial^2}{\\partial x^2}(r^2)^{\\alpha} = 2\\alpha (r^2)^{\\alpha-1} + 4\\alpha(\\alpha-1)x^2 (r^2)^{\\alpha-2}
\\]
% ----------------------------------------------------------------
\\subsection{ბილეთი 1}

\\begin{problem}{პირობა}
გამოთვალეთ $\\dfrac{\\partial^{2}f}{\\partial x\\partial y}$ და
$\\dfrac{\\partial^{2}f}{\\partial x^{2}}$, სადაც
$f(x,y)=\\dfrac{1}{\\sqrt{x^{2}+y^{2}}}$.
\\end{problem}

\\begin{solution}

\\textbf{ნაბიჯი 0 — ჩავწეროთ სხვა სახით:}
\\[
  f(x,y) = (x^2+y^2)^{-\\frac{1}{2}}
\\]

\\medskip
\\textbf{1) $\\dfrac{\\partial^{2}f}{\\partial x\\partial y}$-ის გამოთვლა}

\\textit{პირველი ნაბიჯი — ვდიფერენცირებთ $x$-ს მიხედვით:}
\\[
  \\frac{\\partial f}{\\partial x}
  = \\frac{\\partial}{\\partial x}(x^2+y^2)^{-\\frac{1}{2}}
  = -\\frac{1}{2}(x^2+y^2)^{-\\frac{3}{2}} \\cdot \\underbrace{2x}_{\\frac{\\partial}{\\partial x}(x^2+y^2)}
  = -x(x^2+y^2)^{-\\frac{3}{2}}
\\]

\\textit{მეორე ნაბიჯი — მიღებული გამოსახულება ვდიფერენცირებთ $y$-ს მი\\-ხედ\\-ვით ($x$ ახლა მუდმივია):}
\\[
  \\frac{\\partial^{2}f}{\\partial x\\partial y}
  = \\frac{\\partial}{\\partial y}\\left[-x(x^2+y^2)^{-\\frac{3}{2}}\\right]
\\]
$-x$ — მუდმივია $y$-ს მიხედვით, ამიტომ გამოვიტანთ ფრჩხილებიდან:
\\[
  = -x \\cdot \\frac{\\partial}{\\partial y}(x^2+y^2)^{-\\frac{3}{2}}
  = -x \\cdot \\left(-\\frac{3}{2}\\right)(x^2+y^2)^{-\\frac{5}{2}} \\cdot \\underbrace{2y}_{\\frac{\\partial}{\\partial y}(x^2+y^2)}
\\]
\\[
  = -x \\cdot (-3y)(x^2+y^2)^{-\\frac{5}{2}}
  = 3xy(x^2+y^2)^{-\\frac{5}{2}}
  = \\boxed{\\dfrac{3xy}{\\sqrt{(x^2+y^2)^5}}}
\\]

\\medskip
\\textbf{2) $\\dfrac{\\partial^{2}f}{\\partial x^{2}}$-ის გამოთვლა}

\\textit{ვიყენებთ ნამრავლის წარმოებულის წესს $\\dfrac{\\partial}{\\partial x}\\left[-x \\cdot (x^2+y^2)^{-\\frac{3}{2}}\\right]$-ზე:}
\\[
  \\frac{\\partial^{2}f}{\\partial x^{2}}
  = \\frac{\\partial}{\\partial x}\\left[-x\\cdot(x^2+y^2)^{-\\frac{3}{2}}\\right]
\\]
\\[
  = \\underbrace{\\frac{\\partial}{\\partial x}(-x)}_{ = -1}\\cdot(x^2+y^2)^{-\\frac{3}{2}}
  + (-x)\\cdot \\underbrace{\\frac{\\partial}{\\partial x}(x^2+y^2)^{-\\frac{3}{2}}}_{= -\\frac{3}{2}(x^2+y^2)^{-\\frac{5}{2}}\\cdot 2x}
\\]
\\[
  = -(x^2+y^2)^{-\\frac{3}{2}} + (-x)\\cdot(-3x)(x^2+y^2)^{-\\frac{5}{2}}
\\]
\\[
  = -(x^2+y^2)^{-\\frac{3}{2}} + 3x^2(x^2+y^2)^{-\\frac{5}{2}}
\\]
\\textit{ორივე წევრს ვაქვემდებარებთ საერთო მნიშვნელს $(x^2+y^2)^{5/2}$:}
\\[
  = \\frac{-(x^2+y^2) + 3x^2}{(x^2+y^2)^{5/2}}
  = \\boxed{\\dfrac{2x^{2}-y^{2}}{\\sqrt{(x^{2}+y^{2})^5}}}
\\]
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 2}

\\begin{problem}{პირობა}
გამოთვალეთ $\\dfrac{\\partial^{2}f}{\\partial x\\partial z}$ და
$\\dfrac{\\partial^{2}f}{\\partial y^{2}}$, სადაც
$f(x,y,z)=\\dfrac{1}{\\sqrt{x^{2}+y^{2}+z^{2}}}$.
\\end{problem}

\\begin{solution}
\\textbf{ჩავწეროთ:} $f = (x^2+y^2+z^2)^{-\\frac{1}{2}}$.

\\medskip
\\textbf{1) $\\dfrac{\\partial^{2}f}{\\partial x\\partial z}$}

\\textit{ჯერ $z$-ს მიხედვით:}
\\[
  \\frac{\\partial f}{\\partial z}
  = -\\tfrac{1}{2}(x^2+y^2+z^2)^{-\\frac{3}{2}}\\cdot 2z
  = -z(x^2+y^2+z^2)^{-\\frac{3}{2}}
\\]

\\textit{შემდეგ მიღებული გამოსახულება $x$-ს მიხედვით ($-z$ — მუდმივია):}
\\[
  \\frac{\\partial^{2}f}{\\partial x\\partial z}
  = -z\\cdot\\left(-\\tfrac{3}{2}\\right)(x^2+y^2+z^2)^{-\\frac{5}{2}}\\cdot 2x
  = \\boxed{\\dfrac{3xz}{\\sqrt{(x^{2}+y^{2}+z^{2})^5}}}
\\]

\\medskip
\\textbf{2) $\\dfrac{\\partial^{2}f}{\\partial y^{2}}$}

\\textit{პირველი წარმოებული $y$-ს მიხედვით:}
\\[
  \\frac{\\partial f}{\\partial y}
  = -y(x^2+y^2+z^2)^{-\\frac{3}{2}}
\\]

\\textit{ნამრავლის წესი $y$-ს მიხედვით:}
\\[
  \\frac{\\partial^{2}f}{\\partial y^{2}}
  = (-1)(x^2+y^2+z^2)^{-\\frac{3}{2}}
    + (-y)\\cdot\\left(-\\tfrac{3}{2}\\right)(x^2+y^2+z^2)^{-\\frac{5}{2}}\\cdot 2y
\\]
\\[
  = -(x^2+y^2+z^2)^{-\\frac{3}{2}} + 3y^2(x^2+y^2+z^2)^{-\\frac{5}{2}}
  = \\frac{-(x^2+y^2+z^2)+3y^2}{(x^2+y^2+z^2)^{5/2}}
  = \\boxed{\\dfrac{2y^{2}-x^{2}-z^{2}}{\\sqrt{(x^{2}+y^{2}+z^{2})^5}}}
\\]
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 3}

\\begin{problem}{პირობა}
გამოთვალეთ $\\dfrac{\\partial^{2}f}{\\partial x\\partial y}$ და
$\\dfrac{\\partial^{2}f}{\\partial z^{2}}$, სადაც
$f(x,y,z)=\\dfrac{1}{\\sqrt{x^{2}+y^{2}+z^{2}}}$.
\\end{problem}

\\begin{solution}
\\textbf{ჩავწეროთ:} $f = (x^2+y^2+z^2)^{-\\frac{1}{2}}$.

\\medskip
\\textbf{1) $\\dfrac{\\partial^{2}f}{\\partial x\\partial y}$:}

\\textit{ჯერ $x$-ს მიხედვით:}
$\\dfrac{\\partial f}{\\partial x} = -x(x^2+y^2+z^2)^{-\\frac{3}{2}}$

\\textit{შემდეგ $y$-ს მიხედვით:}
\\[
  \\frac{\\partial^2 f}{\\partial x \\partial y}
  = -x\\cdot\\left(-\\tfrac{3}{2}\\right)(x^2+y^2+z^2)^{-\\frac{5}{2}}\\cdot 2y
  = \\boxed{\\dfrac{3xy}{\\sqrt{(x^{2}+y^{2}+z^{2})^5}}}
\\]

\\medskip
\\textbf{2) $\\dfrac{\\partial^{2}f}{\\partial z^{2}}$:}

\\textit{პირველი:} $\\dfrac{\\partial f}{\\partial z} = -z(x^2+y^2+z^2)^{-\\frac{3}{2}}$

\\textit{ნამრავლის წესი $z$-ს მიხედვით:}
\\[
  = (-1)(x^2+y^2+z^2)^{-\\frac{3}{2}} + (-z)\\cdot\\left(-\\tfrac{3}{2}\\right)(x^2+y^2+z^2)^{-\\frac{5}{2}}\\cdot 2z
\\]
\\[
  = -(x^2+y^2+z^2)^{-\\frac{3}{2}} + 3z^2(x^2+y^2+z^2)^{-\\frac{5}{2}}
  = \\boxed{\\dfrac{2z^{2}-x^{2}-y^{2}}{\\sqrt{(x^{2}+y^{2}+z^{2})^5}}}
\\]
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 4}

\\begin{problem}{პირობა}
გამოთვალეთ $\\dfrac{\\partial^{2}f}{\\partial x\\partial z}$ და
$\\dfrac{\\partial^{2}f}{\\partial y^{2}}$, სადაც
$f(x,y,z)=\\dfrac{1}{\\sqrt{x^{2}+y^{2}}}+z^{2}$.
\\end{problem}

\\begin{solution}
\\textbf{1) $\\dfrac{\\partial^{2}f}{\\partial x\\partial z}$:}

\\textit{ჯერ $x$-ს მიხედვით ($z^2$ ითვლება მუდმივად):}
\\[
  \\frac{\\partial f}{\\partial x}
  = -x(x^2+y^2)^{-\\frac{3}{2}} + 0
  = -x(x^2+y^2)^{-\\frac{3}{2}}
\\]

\\textit{ახლა ეს გამოსახულება ვდიფერენცირებთ $z$-ს მიხედვით. მაგრამ $-x(x^2+y^2)^{-3/2}$ სულ არ შეიცავს $z$-ს, ამიტომ:}
\\[
  \\frac{\\partial^{2}f}{\\partial x\\partial z}
  = \\frac{\\partial}{\\partial z}\\left[-x(x^2+y^2)^{-\\frac{3}{2}}\\right]
  = \\boxed{0}
\\]

\\medskip
\\textbf{2) $\\dfrac{\\partial^{2}f}{\\partial y^{2}}$:}

\\textit{$y$-ს მიხედვით ($z^2$ მუდმივია):}
$\\dfrac{\\partial f}{\\partial y} = -y(x^2+y^2)^{-\\frac{3}{2}}$

\\textit{ნამრავლის წესი:}
\\[
  = -(x^2+y^2)^{-\\frac{3}{2}} + 3y^2(x^2+y^2)^{-\\frac{5}{2}}
  = \\frac{-(x^2+y^2)+3y^2}{(x^2+y^2)^{5/2}}
  = \\boxed{\\dfrac{2y^{2}-x^{2}}{\\sqrt{(x^{2}+y^{2})^5}}}
\\]
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 5}

\\begin{problem}{პირობა}
გამოთვალეთ $\\dfrac{\\partial^{2}f}{\\partial x\\partial z}$ და
$\\dfrac{\\partial^{2}f}{\\partial y^{2}}$, სადაც
$f(x,y,z)=\\dfrac{z}{\\sqrt{x^{2}+y^{2}}}$.
\\end{problem}

\\begin{solution}
\\textbf{გადავწეროთ:} $f = z\\cdot(x^2+y^2)^{-\\frac{1}{2}}$

\\medskip
\\textbf{1) $\\dfrac{\\partial^{2}f}{\\partial x\\partial z}$:}

\\textit{ჯერ $z$-ს მიხედვით ($z$-ს მიხედვით $(x^2+y^2)^{-1/2}$ მუდმივია):}
\\[
  \\frac{\\partial f}{\\partial z} = (x^2+y^2)^{-\\frac{1}{2}}
\\]

\\textit{ახლა $x$-ს მიხედვით:}
\\[
  \\frac{\\partial^{2}f}{\\partial x\\partial z}
  = \\frac{\\partial}{\\partial x}(x^2+y^2)^{-\\frac{1}{2}}
  = -\\tfrac{1}{2}(x^2+y^2)^{-\\frac{3}{2}}\\cdot 2x
  = \\boxed{-\\dfrac{x}{\\sqrt{(x^{2}+y^{2})^3}}}
\\]

\\medskip
\\textbf{2) $\\dfrac{\\partial^{2}f}{\\partial y^{2}}$:}

\\textit{ჯერ $y$-ს მიხედვით (ნამრავლი $z$ და $(x^2+y^2)^{-1/2}$; $z$ — მუდმივი):}
\\[
  \\frac{\\partial f}{\\partial y}
  = z\\cdot\\left(-\\tfrac{1}{2}\\right)(x^2+y^2)^{-\\frac{3}{2}}\\cdot 2y
  = -zy(x^2+y^2)^{-\\frac{3}{2}}
\\]

\\textit{ნამრავლის წესი $y$-ს მიხედვით ($-z$ — მუდმივი $y$-სთვის):}
\\[
  \\frac{\\partial^{2}f}{\\partial y^{2}}
  = -z\\cdot(x^2+y^2)^{-\\frac{3}{2}}
    + (-zy)\\cdot\\left(-\\tfrac{3}{2}\\right)(x^2+y^2)^{-\\frac{5}{2}}\\cdot 2y
\\]
\\[
  = -z(x^2+y^2)^{-\\frac{3}{2}} + 3zy^2(x^2+y^2)^{-\\frac{5}{2}}
  = \\frac{-z(x^2+y^2)+3zy^2}{(x^2+y^2)^{5/2}}
  = \\boxed{\\dfrac{2zy^{2}-zx^{2}}{\\sqrt{(x^{2}+y^{2})^5}}}
\\]
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 6}

\\begin{problem}{პირობა}
გამოთვალეთ $\\dfrac{\\partial^{2}f}{\\partial x\\partial z}$ და
$\\dfrac{\\partial^{2}f}{\\partial y^{2}}$, სადაც
$f(x,y,z)=\\dfrac{x}{\\sqrt{x^{2}+y^{2}+z^{2}}}$.
\\end{problem}

\\begin{solution}
\\textbf{გადავწეროთ:} $f = x\\cdot(x^2+y^2+z^2)^{-\\frac{1}{2}}$

\\medskip
\\textbf{1) $\\dfrac{\\partial^{2}f}{\\partial x\\partial z}$:}

\\textit{ჯერ $z$-ს მიხედვით ($x$ — მუდმივი $z$-სთვის):}
\\[
  \\frac{\\partial f}{\\partial z}
  = x\\cdot\\left(-\\tfrac{1}{2}\\right)(x^2+y^2+z^2)^{-\\frac{3}{2}}\\cdot 2z
  = -xz(x^2+y^2+z^2)^{-\\frac{3}{2}}
\\]

\\textit{ნამრავლის წესი $x$-ს მიხედვით ($-z$ — მუდმივი, $x(x^2+y^2+z^2)^{-3/2}$ — ნამრავლი):}
\\[
  \\frac{\\partial^{2}f}{\\partial x\\partial z}
  = -z\\cdot(x^2+y^2+z^2)^{-\\frac{3}{2}}
    + (-xz)\\cdot\\left(-\\tfrac{3}{2}\\right)(x^2+y^2+z^2)^{-\\frac{5}{2}}\\cdot 2x
\\]
\\[
  = -z(x^2+y^2+z^2)^{-\\frac{3}{2}} + 3x^2z(x^2+y^2+z^2)^{-\\frac{5}{2}}
\\]
\\[
  = \\frac{-z(x^2+y^2+z^2)+3x^2z}{(x^2+y^2+z^2)^{5/2}}
  = \\boxed{\\dfrac{2x^{2}z-zy^{2}-z^{3}}{\\sqrt{(x^{2}+y^{2}+z^{2})^5}}}
\\]

\\medskip
\\textbf{2) $\\dfrac{\\partial^{2}f}{\\partial y^{2}}$:}

\\textit{ჯერ $y$-ს მიხედვით ($x$ — მუდმივი):}
\\[
  \\frac{\\partial f}{\\partial y}
  = x\\cdot\\left(-\\tfrac{1}{2}\\right)(x^2+y^2+z^2)^{-\\frac{3}{2}}\\cdot 2y
  = -xy(x^2+y^2+z^2)^{-\\frac{3}{2}}
\\]

\\textit{ნამრავლის წესი $y$-ს მიხედვით:}
\\[
  = -x(x^2+y^2+z^2)^{-\\frac{3}{2}} + 3xy^2(x^2+y^2+z^2)^{-\\frac{5}{2}}
  = \\boxed{\\dfrac{2xy^{2}-x^{3}-xz^{2}}{\\sqrt{(x^{2}+y^{2}+z^{2})^5}}}
\\]
\\end{solution}

\\noindent\\textit{შენიშვნა: ბილეთი 7 (კითხვა 2) შინაარსობრივად ემთხვევა ბილეთ 2-ს.}

% ================================================================
\\newpage
\\section{კითხვა 3 — რიგი, მთავარი ნაწილი, წრფივობა}
% ================================================================

\\subsection*{საფუძვლიანი თეორიული შესავალი}

\\subsubsection*{1. განტოლების რიგი (Order)}

განტოლებაში მონაწილე \\emph{ყველაზე მაღალი} რიგის კერძო წარმოებულის
რიგი. მაგ.: $u_{xx}$ — მე-2 რიგისაა, $u_{xxy}$ — მე-3 რიგისაა.

\\textbf{მნიშვნელოვანი:} თუ განტოლება შეიცავს
$\\dfrac{\\partial}{\\partial y}(\\ldots)$ ან $\\dfrac{\\partial}{\\partial x}(\\ldots)$
ტიპის გა\\-მო\\-სა\\-ხუ\\-ლე\\-ბე\\-ბს, ჯერ უნდა გამოვახსნათ ის (ვდიფერენცირებთ), და
\\emph{შემდეგ} განვსაზღ\\-ვ\\-რავთ რიგს.

\\subsubsection*{2. მთავარი ნაწილი (Principal Part)}

ეს არის განტოლებიდან ამოჭრილი ის ნაწილი, სადაც \\emph{მხოლოდ} ყველაზე
მაღალი რიგის წარმოებულებია. ყველა დაბალი რიგის წევრი (მათ შორის
$u, u_x, u_y$) — ამოვარდება.

\\textit{მაგ.: $u_{xx} + 3u_{xy} + u_x - 5u = 0$ — მთავარი ნაწილია
$u_{xx}+3u_{xy}$.}

\\subsubsection*{3. თავისუფალი წევრი (Free Term)}

ის ნაწილი, სადაც $u$-ც არ ჩანს და მისი არც ერთი წარმოებული
($u_x, u_y, u_{xx}, \\ldots$). ჩვეულებრივ ეს ცვლადების ფუნქცია ან
მუდმივია (მხოლოდ $x$, $y$, $f(x,y)$ და ა.შ.).

\\subsubsection*{4. წრფივობა (Linearity)}

\\textbf{წრფივობა:} განტოლება წრფივია, თუ ორივე პირობა ერთდროულად სრულდება:

\\begin{enumerate}[label=(\\alph*)]
  \\item \\textbf{ხარისხის პირობა:} $u$ და მისი ყველა
    წარმოებული მხოლოდ 1-ლი ხარისხით ($u^1$, $u_x^1$, $u_{xx}^1$,
    \\ldots). კვადრატი ($u_{xx}^2$) ან ფესვი ($\\sqrt{u_y}$) — წრფიდება
    არ არის.
  \\item \\textbf{ნამრავლის პირობა:} $u$ ან მისი წარმოებულები
    ერთმანეთზე არ მრავლდება ($u\\cdot u_x$, $u_{xx}\\cdot u_{yy}$ —
    დაუშვებელია).
\\end{enumerate}
\\textbf{არა წრფივობა:} განტო\\-ლე\\-ბა თუ არაა წრფივი მაშინ არა წრფივი განტო\\-ლე\\-ბა ეწოდება.
\\\\
\\textbf{კვაზიწრფივობა:} მთავარი ნაწილი წრფივია, მაგრამ სხვა ნაწილი —
არა.
\\textbf{მაგალითი (კვაზიწრფივი განტოლება):}
\\[ u \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} + \\left(\\frac{\\partial u}{\\partial x}\\right)^2 = 0 \\]

\\textbf{პასუხი:} მოცემული განტოლება კვაზიწრფივია.
\\begin{itemize}
    \\item \\textbf{მთავარი ნაწილი:} $u \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2}$ \\\\ (აქ უმაღლესი რიგის წარმოებულები შედის წრფივად, რაც კვაზიწრფი\\-ვო\\-ბის აუცილებელი პირობაა).
    \\item \\textbf{არაწრფივი ნაწილი:} კოეფიციენტი $u$ და თავისუფალი წევრი $\\left(\\frac{\\partial u}{\\partial x}\\right)^2$ \\\\ (რადგან კოეფიციენტი დამოკიდებულია საძიებელ ფუნქციაზე, ხოლო დამატებითი წევრი კვადრატშია, განტოლება მთლიანობაში არაწრ\\-ფი\\-ვია).
\\end{itemize}
% ----------------------------------------------------------------
\\subsection{ბილეთი 1}

\\begin{problem}{პირობა}
განსაზღვრეთ:
\\[
  2u_{xx}u_{xxy}-\\frac{\\partial}{\\partial y}(u_{xx}-u_y)^{2}
  -2u_{xxy}u_y+u_x-27x=12y
\\]
ა)~რიგი;\\quad ბ)~მთავარი ნაწილი;\\quad
გ)~თავისუფალი წევრი;\\quad დ)~წრფივობა.
\\end{problem}

\\begin{solution}

\\textbf{ნაბიჯი 1 — გავხსნათ $\\dfrac{\\partial}{\\partial y}(u_{xx}-u_y)^{2}$:}

ვიყენებთ ჯაჭვის წესს: $\\dfrac{d}{dy}[g^2] = 2g\\cdot g'$, სადაც
$g = u_{xx}-u_y$:
\\begin{align*}
  \\frac{\\partial}{\\partial y}(u_{xx}-u_y)^{2}
  &= 2(u_{xx}-u_y)\\cdot\\frac{\\partial}{\\partial y}(u_{xx}-u_y)\\\\
  &= 2(u_{xx}-u_y)\\cdot(u_{xxy}-u_{yy})\\\\
  &= 2u_{xx}u_{xxy} - 2u_{xx}u_{yy} - 2u_y u_{xxy} + 2u_y u_{yy}
\\end{align*}

\\textbf{ნაბიჯი 2 — ჩავსვათ ორიგინალ განტოლებაში:}
\\begin{align*}
  &2u_{xx}u_{xxy}
  -\\bigl(2u_{xx}u_{xxy} - 2u_{xx}u_{yy} - 2u_y u_{xxy} + 2u_y u_{yy}\\bigr)
  -2u_{xxy}u_y + u_x - 27x = 12y
\\end{align*}

\\textbf{ნაბიჯი 3 — გავხსნათ ფრჩხილები და შევკრიბოთ:}
\\begin{align*}
  &\\cancel{2u_{xx}u_{xxy}}
  -\\cancel{2u_{xx}u_{xxy}}
  + 2u_{xx}u_{yy}
  + \\bcancel{2u_y u_{xxy}}
  - 2u_y u_{yy}
  - \\bcancel{2u_{xxy}u_y}
  + u_x - 27x = 12y
\\end{align*}
\\[
  \\Rightarrow\\quad u_x + 2u_{xx}u_{yy} - 2u_y u_{yy} = 12y + 27x
\\]

\\medskip
\\textbf{პასუხები:}

ა) \\textbf{განტოლების რიგი: 2} \\quad ($u_{xx}$ და $u_{yy}$ — ორივე მე-2 რიგისაა.)

ბ) \\textbf{მთავარი ნაწილი: $2u_{xx}u_{yy} - 2u_y u_{yy}$}

გ) \\textbf{თავისუფალი წევრი: $12y + 27x$}

დ) \\textbf{არ არის წრფივი} \\quad ($u_{xx}u_{yy}$ — ნამრავლია ორი მე-2 რიგის წარმოებულისა.)
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 2}

\\begin{problem}{პირობა}
განსაზღვრეთ:
\\[
  \\frac{\\partial}{\\partial x}(u_{yy}^{2}-u)
  -2u_{yy}\\frac{\\partial}{\\partial y}(u_{xy}-u_x)
  -2u_x+2=f(x,y)
\\]
ა)~რიგი;\\quad ბ)~მთავარი ნაწილი;\\quad
გ)~თავისუფალი წევრი;\\quad დ)~წრფივობა.
\\end{problem}

\\begin{solution}

\\textbf{ნაბიჯი 1 — გავხსნათ $\\dfrac{\\partial}{\\partial x}(u_{yy}^{2}-u)$:}
\\[
  \\frac{\\partial}{\\partial x}(u_{yy}^{2}) - \\frac{\\partial u}{\\partial x}
  = 2u_{yy}\\cdot u_{xyy} - u_x
\\]

\\textbf{ნაბიჯი 2 — გავხსნათ $-2u_{yy}\\dfrac{\\partial}{\\partial y}(u_{xy}-u_x)$:}
\\[
  -2u_{yy}(u_{xyy}-u_{xy})
  = -2u_{yy}u_{xyy} + 2u_{yy}u_{xy}
\\]

\\textbf{ნაბიჯი 3 — ჩავსვათ:}
\\[
  2u_{yy}u_{xyy} - u_x - 2u_{yy}u_{xyy} + 2u_{yy}u_{xy} - 2u_x + 2 = f(x,y)
\\]
\\[
  \\cancel{2u_{yy}u_{xyy}} - u_x - \\cancel{2u_{yy}u_{xyy}} + 2u_{yy}u_{xy} - 2u_x + 2 = f(x,y)
\\]
\\[
  \\Rightarrow\\quad 2u_{yy}u_{xy} - 3u_x = f(x,y) - 2
\\]

\\medskip
\\textbf{პასუხები:}

ა) \\textbf{განტოლების რიგი: 2} \\quad ($u_{yy}$ და $u_{xy}$ — ორივე მე-2 რიგისაა.)

ბ) \\textbf{მთავარი ნაწილი: $2u_{yy}u_{xy}$} \\quad ($-3u_x$ — პირველი რიგის, ამიტომ მთავარ ნაწილში არ შედის.)

გ) \\textbf{თავისუფალი წევრი: $f(x,y)-2$}

დ) \\textbf{არ არის წრფივი} \\quad ($u_{yy}\\cdot u_{xy}$ — ნამრავლია.)
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 3}

\\begin{problem}{პირობა}
განსაზღვრეთ:
\\[
  \\frac{\\partial}{\\partial y}(yu_y+u_x^{2})-2u_x u_{xy}+u_x-6u=0
\\]
\\end{problem}

\\begin{solution}

\\textbf{ნაბიჯი 1 — გავხსნათ $\\dfrac{\\partial}{\\partial y}(yu_y+u_x^{2})$:}

ნამრავლის წესი $yu_y$-ზე და ჯაჭვის წესი $u_x^2$-ზე:
\\[
  \\frac{\\partial}{\\partial y}(yu_y) + \\frac{\\partial}{\\partial y}(u_x^{2})
  = (u_y + yu_{yy}) + 2u_x u_{xy}
\\]

\\textbf{ნაბიჯი 2 — ჩავსვათ:}
\\[
  u_y + yu_{yy} + \\cancel{2u_x u_{xy}} - \\cancel{2u_x u_{xy}} + u_x - 6u = 0
\\]
\\[
  \\Rightarrow\\quad yu_{yy} + u_y + u_x - 6u = 0
\\]

\\medskip
\\textbf{პასუხები:}

ა) \\textbf{განტოლების რიგი: 2} \\quad ($u_{yy}$ — მე-2 რიგის წარმოებულია.)

ბ) \\textbf{მთავარი ნაწილი: $yu_{yy}$}

გ) \\textbf{თავისუფალი წევრი: $0$} \\quad (განტოლება ჰომოგენურია.)

დ) \\textbf{წრფივია} \\quad ($u$, $u_y$, $u_x$, $u_{yy}$ — ყველა 1-ლი ხარისხით, ნამრავლი არ არის. კოეფიციენტი $y$ — ცვლადია, მაგრამ ეს წრფივობას არ არღვევს.)
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 4}

\\begin{problem}{პირობა}
განსაზღვრეთ:
\\[
  u_{xx}^{2}+u_{yy}^{2}-(u_{xx}-u_{yy})^{2}-5xy=\\tan(xy^{2})
\\]
\\end{problem}

\\begin{solution}

\\textbf{ნაბიჯი 1 — გავხსნათ $(u_{xx}-u_{yy})^2$:}
\\[
  (u_{xx}-u_{yy})^2 = u_{xx}^2 - 2u_{xx}u_{yy} + u_{yy}^2
\\]

\\textbf{ნაბიჯი 2 — ჩავსვათ:}
\\[
  u_{xx}^{2}+u_{yy}^{2}
  -(u_{xx}^2 - 2u_{xx}u_{yy} + u_{yy}^2)
  - 5xy = \\tan(xy^2)
\\]
\\[
  \\cancel{u_{xx}^{2}}+\\cancel{u_{yy}^{2}}
  -\\cancel{u_{xx}^2} + 2u_{xx}u_{yy} - \\cancel{u_{yy}^2}
  - 5xy = \\tan(xy^2)
\\]
\\[
  \\Rightarrow\\quad 2u_{xx}u_{yy} = \\tan(xy^{2})+5xy
\\]

\\medskip
\\textbf{პასუხები:}

ა) \\textbf{განტოლების რიგი: 2}

ბ) \\textbf{მთავარი ნაწილი: $2u_{xx}u_{yy}$}

გ) \\textbf{თავისუფალი წევრი: $\\tan(xy^{2})+5xy$}

დ) \\textbf{არ არის წრფივი} \\quad ($u_{xx}\\cdot u_{yy}$ — ნამრავლია.)
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 5}

\\begin{problem}{პირობა}
განსაზღვრეთ:
\\[
  \\frac{\\partial}{\\partial y}(yu_y+u_x^{2})-2u_x u_{xy}+u_x-6u=18xy
\\]
\\end{problem}

\\begin{solution}
ეს ბილეთი N3-ის ანალოგია, მხოლოდ მარჯვენა მხარე განსხვავებულია.
მიღებული სახე:
\\[
  yu_{yy} + u_y + u_x - 6u = 18xy
\\]

\\textbf{პასუხები:}

ა) \\textbf{განტოლების რიგი: 2}

ბ) \\textbf{მთავარი ნაწილი: $yu_{yy}$}

გ) \\textbf{თავისუფალი წევრი: $18xy$}

დ) \\textbf{წრფივია} \\quad ($u$, $u_y$, $u_x$, $u_{yy}$ — ყველა 1-ლი ხარისხით, ნამრავლი არ არის.)
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 6}

\\begin{problem}{პირობა}
განსაზღვრეთ:
\\[
  2(u_x-2u)u_{xy}-\\frac{\\partial}{\\partial y}(u_x-2u)^{2}=f(x,y)
\\]
\\end{problem}

\\begin{solution}

\\textbf{ნაბიჯი 1 — გავხსნათ $2(u_x-2u)u_{xy}$:}
\\[
  = 2u_x u_{xy} - 4uu_{xy}
\\]

\\textbf{ნაბიჯი 2 — გავხსნათ $\\dfrac{\\partial}{\\partial y}(u_x-2u)^{2}$:}
\\[
  = 2(u_x-2u)\\cdot\\frac{\\partial}{\\partial y}(u_x-2u)
  = 2(u_x-2u)(u_{xy}-2u_y)
\\]
\\[
  = 2u_x u_{xy} - 4u_x u_y - 4uu_{xy} + 8uu_y
\\]

\\textbf{ნაბიჯი 3 — ჩავსვათ:}
\\begin{align*}
  &(2u_x u_{xy} - 4uu_{xy})
  - (2u_x u_{xy} - 4u_x u_y - 4uu_{xy} + 8uu_y) = f(x,y)\\\\
  &\\cancel{2u_x u_{xy}} - \\cancel{4uu_{xy}}
  - \\cancel{2u_x u_{xy}} + 4u_x u_y + \\cancel{4uu_{xy}} - 8uu_y = f(x,y)
\\end{align*}
\\[
  \\Rightarrow\\quad 4u_x u_y - 8uu_y = f(x,y)
\\]

\\medskip
\\textbf{პასუხები:}

ა) \\textbf{განტოლების რიგი: 1} \\quad ($u_x$ და $u_y$ — ორივე პირველი რიგისაა.)

ბ) \\textbf{მთავარი ნაწილი: $4u_x u_y - 8uu_y$}

გ) \\textbf{თავისუფალი წევრი: $f(x,y)$}

დ) \\textbf{არ არის წრფივი} \\quad ($u_x\\cdot u_y$ და $u\\cdot u_y$ — ნამრავლებია.)
\\end{solution}

% ================================================================
\\newpage
\\section{კითხვა 4 — ტიპი და მთავარი ნაწილის კანონიკური სახე}
% ================================================================

\\subsection*{საფუძვლიანი თეორიული შესავალი}

\\subsubsection*{მე-2 რიგის წრფივი კწდგ — ზოგადი სახე}

\\[
  Au_{xx}+2Bu_{xy}+Cu_{yy}+Du_x+Eu_y+Fu=G
\\]

სადაც $A, B, C, D, E, F$ — შეიძლება $x$, $y$-ის ფუნქციები ან მუდმივები
იყვნენ.

\\subsubsection*{დისკრიმინანტი}

\\[
  \\Delta = B^2 - AC
\\]

\\textit{ყურადღება: $u_{xy}$-ის კოეფიციენტი ფორმულაში $2B$-ს ტოლია.
თუ განტო\\-ლე\\-ბა\\-ში $u_{xy}$-ის კოეფიციენტი, ვთქვათ, $6$-ია, მაშინ
$2B=6$, ე.ი. $B = 6/2 = 3$.}

\\subsubsection*{ტიპების ცხრილი}

\\begin{center}
\\renewcommand{\\arraystretch}{1.5}
\\begin{tabular}{|c|c|c|c|}
\\hline
\\textbf{პირობა} & \\textbf{ტიპი} & \\textbf{ფესვები} & \\textbf{მთ.ნ. კანონ. სახე} \\\\
\\hline
$\\Delta>0$ & ჰიპერბოლური & 2 ნამდვილი & $u_{\\xi\\eta}=0$ \\\\
\\hline
$\\Delta<0$ & ელიფსური & კომპლექსური & $u_{\\xi\\xi}+u_{\\eta\\eta}=0$ \\\\
\\hline
$\\Delta=0$ & პარაბოლური & 1 ნამდვილი & $u_{\\eta\\eta}=0$ \\\\
\\hline
\\end{tabular}
\\end{center}

\\subsubsection*{მახასიათებელი განტოლება}

\\[
  A(dy)^{2} - 2B\\,dy\\,dx + C(dx)^{2} = 0
\\]

\\textit{წესი: $u_{xx} \\leftrightarrow (dy)^2$,\\quad
$u_{xy} \\leftrightarrow -dy\\,dx$,\\quad
$u_{yy} \\leftrightarrow (dx)^2$}

ორ მხარეს $dx^2$-ზე ვყოფთ:
\\[
  A\\left(\\frac{dy}{dx}\\right)^2 - 2B\\frac{dy}{dx} + C = 0
\\]

ეს კვადრატული განტოლება $\\dfrac{dy}{dx}$-ის მიმართ. მის ფესვებს ვინტეგრირებთ — ვიღებთ ახალ ცვლადებს $\\xi$ და $\\eta$.

\\subsubsection*{ნიშნის ფუნქცია}

\\[
  \\mathrm{sign}(t) = \\begin{cases}1,&t>0\\\\0,&t=0\\\\-1,&t<0\\end{cases}
\\]

% ----------------------------------------------------------------
\\subsection{ბილეთები 1 \\& 5 — $xu_{xx}+yu_{yy}=0$}

\\begin{problem}{პირობა}
მოცემულია $xu_{xx}+yu_{yy}=0$. \\\\
ა)~სიბრტყის კლასიფიკაცია;\\quad
ბ)~კანონიკური გარდაქმნა $x<0$, $y>0$ არეში.
\\end{problem}

\\begin{solution}
\\subsubsection*{ა) კლასიფიკაცია}

\\textit{კოეფიციენტები:}
\\[
  A=x,\\quad 2B=0 \\Rightarrow B = 0/2 = 0,\\quad C=y
  \\quad\\Rightarrow\\quad
  \\Delta = B^2 - AC = 0 - xy = -xy
\\]

\\begin{itemize}
  \\item $x>0, y>0$ (I კვადრანტი): $xy>0 \\Rightarrow \\Delta = -xy < 0$ \\textbf{— ელიფსური}
  \\item $x<0, y<0$ (III კვადრანტი): $xy>0 \\Rightarrow \\Delta < 0$ \\textbf{— ელიფსური}
  \\item $x<0, y>0$ (II კვადრანტი): $xy<0 \\Rightarrow \\Delta = -xy > 0$ \\textbf{— ჰიპერბოლური}
  \\item $x>0, y<0$ (IV კვადრანტი): $xy<0 \\Rightarrow \\Delta > 0$ \\textbf{— ჰიპერბოლური}
  \\item $x=0$ ან $y=0$ (ღერძები): $\\Delta = 0$ \\textbf{— პარაბოლური}
\\end{itemize}

\\begin{center}
\\begin{tikzpicture}[scale=1.05]
  \\fill[pattern=north west lines, pattern color=red!55]
        (0,0) rectangle (2.6,2.6);
  \\fill[pattern=north west lines, pattern color=red!55]
        (-2.6,-2.6) rectangle (0,0);
  \\fill[pattern=north east lines, pattern color=blue!55]
        (-2.6,0) rectangle (0,2.6);
  \\fill[pattern=north east lines, pattern color=blue!55]
        (0,-2.6) rectangle (2.6,0);
  \\foreach \\x in {-2.3,-1.8,-1.3,-0.8,-0.3,0.3,0.8,1.3,1.8,2.3}{
    \\draw[green!60!black, line width=1.2pt] (\\x,-0.13) -- (\\x,0.13);
  }
  \\foreach \\y in {-2.3,-1.8,-1.3,-0.8,-0.3,0.3,0.8,1.3,1.8,2.3}{
    \\draw[green!60!black, line width=1.2pt] (-0.13,\\y) -- (0.13,\\y);
  }
  \\draw[->, thick] (-2.8,0) -- (2.9,0) node[right] {$x$};
  \\draw[->, thick] (0,-2.8) -- (0,2.9) node[above] {$y$};
  \\node[font=\\small, blue!80!black]  at (-1.4, 1.4) {ჰიპ.};
  \\node[font=\\small, red!75!black]   at ( 1.4, 1.4) {ელიფ.};
  \\node[font=\\small, blue!80!black]  at ( 1.4,-1.4) {ჰიპ.};
  \\node[font=\\small, red!75!black]   at (-1.4,-1.4) {ელიფ.};
  \\node[font=\\small,green!55!black]  at (4, 0) {პარ.};
  \\node[font=\\small,green!55!black]  at (0, 3.7) {პარ.};
\\end{tikzpicture}
\\end{center}

\\subsubsection*{ბ) $x<0$, $y>0$ — ჰიპერბოლური}

\\textit{ნაბიჯი 1 — მახასიათებელი განტოლება:}
\\[
  x(dy)^2 + y(dx)^2 = 0
\\]

\\textit{ნაბიჯი 2 — $dx^2$-ზე გავყოთ:}
\\[
  x\\left(\\frac{dy}{dx}\\right)^2 + y = 0
  \\quad\\Rightarrow\\quad
  \\left(\\frac{dy}{dx}\\right)^2 = -\\frac{y}{x}
\\]

\\textit{ნაბიჯი 3 — ვიხსნათ:}

$x<0$, $y>0$ — ამიტომ $-y/x > 0$ (ნამდვილი ფესვი გვაქვს):
\\[
  \\frac{dy}{dx} = \\pm\\sqrt{-\\frac{y}{x}} = \\pm\\frac{\\sqrt{y}}{\\sqrt{-x}}
\\]

\\textit{ნაბიჯი 4 — ცვლადები გამოვყოთ:}
\\[
  \\frac{dy}{\\sqrt{y}} = \\pm\\frac{dx}{\\sqrt{-x}}
\\]

\\textit{ნაბიჯი 5 — ინტეგრირება:}
\\[
  \\int y^{-\\frac{1}{2}}dy = \\pm\\int (-x)^{-\\frac{1}{2}}dx
\\]
\\[
  2\\sqrt{y} = \\pm 2\\sqrt{-x} + C
  \\quad\\Rightarrow\\quad
  \\sqrt{y} \\pm \\sqrt{-x} = C
\\]

\\textit{ნაბიჯი 6 — ახალი ცვლადები:}
\\[
  \\xi = \\sqrt{y}+\\sqrt{-x},\\qquad \\eta = \\sqrt{y}-\\sqrt{-x}
\\]

\\[
  \\Rightarrow\\quad \\textbf{მთავარი ნაწილის კანონიკური სახე:}\\quad \\boxed{u_{\\xi\\eta} = 0}
\\]
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთები 2 \\& 6 — $\\mathrm{sign}(y)\\,u_{xx}+2u_{xy}+u_{yy}=0$}

\\begin{problem}{პირობა}
მოცემულია $\\mathrm{sign}(y)\\,u_{xx}+2u_{xy}+u_{yy}=0$.\\\\
ა)~სიბრტყის კლასიფიკაცია;\\quad
ბ)~მთავარი ნაწილის კანონიკური სახე $y<0$-ისთვის (ბილეთი 2);\\quad
გ)~მთავარი ნაწილის კანონიკური სახე $y>0$-ისთვის (ბილეთი 6).
\\end{problem}

\\begin{solution}
\\subsubsection*{ა) კლასიფიკაცია}

\\textit{კოეფიციენტები:}
\\[
  A=\\mathrm{sign}(y),\\quad 2B=2 \\Rightarrow B = 2/2 = 1,\\quad C=1
  \\quad\\Rightarrow\\quad
  \\Delta = B^2 - AC = 1 - \\mathrm{sign}(y)
\\]

\\begin{itemize}
  \\item $y>0$: $\\mathrm{sign}(y)=1$, $\\Delta = 1-1 = 0$ \\textbf{— პარაბოლური}
  \\item $y=0$: $\\mathrm{sign}(y)=0$, $\\Delta = 1-0 = 1 > 0$ \\textbf{— ჰიპერბოლური}
  \\item $y<0$: $\\mathrm{sign}(y)=-1$, $\\Delta = 1-(-1) = 2 > 0$ \\textbf{— ჰიპერბოლური}
\\end{itemize}

\\begin{center}
\\begin{tikzpicture}[scale=1.05]
  \\fill[pattern=horizontal lines, pattern color=green!55!black]
        (-2.7,0) rectangle (2.7,2.6);
  \\fill[pattern=north east lines, pattern color=blue!55]
        (-2.7,-2.6) rectangle (2.7,0);
  \\draw[->, thick] (-2.9,0) -- (3.0,0) node[right] {$x$};
  \\draw[->, thick] (0,-2.8) -- (0,2.9) node[above] {$y$};
  \\node[font=\\small, green!45!black] at (0, 1.4) {პარაბოლური ($y>0$)};
  \\node[font=\\small, blue!75!black]  at (0,-1.4) {ჰიპერბოლური ($y\\leq0$)};
  \\node[font=\\tiny] at (-3.7, 0) {$\\Delta=1>0$};
\\end{tikzpicture}
\\end{center}

\\subsubsection*{ბ) $y<0$ — ჰიპერბოლური}

\\textit{$\\mathrm{sign}(y)=-1$, განტოლება:} $-u_{xx}+2u_{xy}+u_{yy}=0$

\\[
  A=-1,\\quad 2B=2 \\Rightarrow B = 2/2 = 1,\\quad C=1
\\]

\\textit{მახასიათებელი:}
\\[
  -(dy)^2 - 2\\,dy\\,dx + (dx)^2 = 0
\\]
\\textit{$dx^2$-ზე გაყოფა:}
\\[
  -\\left(\\frac{dy}{dx}\\right)^2 - 2\\frac{dy}{dx} + 1 = 0
\\]
\\textit{კვადრატული განტოლება $p = \\frac{dy}{dx}$-ის მიმართ:}
$-p^2 - 2p + 1 = 0 \\;\\Rightarrow\\; p^2 + 2p - 1 = 0$

დისკრიმინანტი: $D = 4 + 4 = 8$
\\[
  p = \\frac{-2\\pm\\sqrt{8}}{2} = -1\\pm\\sqrt{2}
\\]

\\textit{ინტეგრირება:}
$dy = (-1\\pm\\sqrt{2})\\,dx \\;\\Rightarrow\\; y + x \\mp x\\sqrt{2} = C$

\\textit{ახალი ცვლადები:}
\\[
  \\xi = y + x(1+\\sqrt{2}),\\qquad \\eta = y + x(1-\\sqrt{2})
\\]
\\[
  \\Rightarrow\\quad \\textbf{მთავარი ნაწილის კანონიკური სახე:}\\quad \\boxed{u_{\\xi\\eta}=0}
\\]

\\subsubsection*{გ) $y>0$ — პარაბოლური}

\\textit{$\\mathrm{sign}(y)=1$, განტოლება:} $u_{xx}+2u_{xy}+u_{yy}=0$

\\[
  A=1,\\quad 2B=2 \\Rightarrow B = 2/2 = 1,\\quad C=1,\\quad \\Delta = 1-1\\cdot1 = 0
\\]

\\textit{მახასიათებელი:}
\\[
  (dy)^2 - 2\\,dy\\,dx + (dx)^2 = 0
  \\;\\Rightarrow\\;
  \\left(\\frac{dy}{dx}-1\\right)^2 = 0
  \\;\\Rightarrow\\;
  \\frac{dy}{dx} = 1
\\]

\\textit{ინტეგრირება:} $y = x + C \\;\\Rightarrow\\; y - x = C$
\\textit{ახალი ცვლადები:}
\\[
  \\xi = y-x, \\qquad \\eta = x
\\]
($\\eta$ — ნებისმიერი დამოუკიდებელი ფუნქცია, მთავარია იაკობიანი $\\neq 0$.)

\\textit{იაკობიანის შემოწმება:}
\\[
  J = \\frac{\\partial(\\xi,\\eta)}{\\partial(x,y)}
  = \\begin{vmatrix}
      \\dfrac{\\partial\\xi}{\\partial x} & \\dfrac{\\partial\\xi}{\\partial y} \\\\[1em]
      \\dfrac{\\partial\\eta}{\\partial x} & \\dfrac{\\partial\\eta}{\\partial y}
    \\end{vmatrix}
  = \\begin{vmatrix}
      -1 & 1 \\\\
       1 & 0
    \\end{vmatrix}
  = (-1)\\cdot 0 - 1\\cdot 1 = -1 \\neq 0
\\]
ამრიგად, ცვლადების შეცვლა კანონიერია.

\\[
  \\Rightarrow\\quad \\textbf{მთავარი ნაწილის კანონიკური სახე:}\\quad \\boxed{u_{\\eta\\eta}=0}
\\]
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 3 — $u_{xx}+u_{yy}=0$}

\\begin{problem}{პირობა}
მოცემულია $u_{xx}+u_{yy}=0$. \\\\
ა)~კლასიფიკაცია;\\quad ბ)~მთავარი ნაწილის კანონიკური სახე.
\\end{problem}

\\begin{solution}
\\[
  A=1,\\quad 2B=0 \\Rightarrow B = 0/2 = 0,\\quad C=1
  \\;\\Rightarrow\\; \\Delta = 0 - 1\\cdot1 = -1 < 0
\\]

$\\Delta < 0$ — განტოლება \\textbf{ელიფსურია მთელ სიბრტყეზე}.

\\begin{center}
\\begin{tikzpicture}[scale=0.95]
  \\fill[pattern=north west lines, pattern color=red!55]
        (-2.7,-2.6) rectangle (2.7,2.6);
  \\draw[->, thick] (-2.9,0) -- (3.0,0) node[right] {$x$};
  \\draw[->, thick] (0,-2.8) -- (0,2.9) node[above] {$y$};
  \\node[font=\\normalsize, red!75!black] at (0, -3.3) {ელიფსურია ყველგან};
  \\node[font=\\small, red!60!black]      at (0,-4) {$\\Delta=-1<0$};
\\end{tikzpicture}
\\end{center}

\\textit{მახასიათებელი:}
\\[
  (dx)^2 + (dy)^2 = 0
  \\;\\Rightarrow\\;
  1 + \\left(\\frac{dy}{dx}\\right)^2 = 0
  \\;\\Rightarrow\\;
  \\frac{dy}{dx} = \\pm i
\\]

\\textit{ინტეგრირება:}
$dy = \\pm i\\,dx \\;\\Rightarrow\\; y \\pm ix = C$

\\textit{ელიფსური შემთხვევისთვის ვიყენებთ ნამდვილ და წარმოსახვით ნაწილებს:}
\\[
  \\xi = \\mathrm{Re}(y+ix) = y,\\qquad
  \\eta = \\mathrm{Im}(y+ix) = x
\\]
\\[
  \\Rightarrow\\quad \\textbf{მთავარი ნაწილის კანონიკური სახე:}\\quad \\boxed{u_{\\xi\\xi}+u_{\\eta\\eta}=0}
\\]
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთები 4 \\& 7 — $yu_{xx}+xu_{yy}=0$}

\\begin{problem}{პირობა}
მოცემულია $yu_{xx}+xu_{yy}=0$.\\\\
ა)~კლასიფიკაცია;\\quad ბ)~მთავარი ნაწილის კანონიკური სახე $x<0$, $y>0$ არეში.
\\end{problem}

\\begin{solution}
\\[
  A=y,\\quad 2B=0 \\Rightarrow B = 0/2 = 0,\\quad C=x
  \\;\\Rightarrow\\; \\Delta = 0 - yx = -yx
\\]

კლასიფიკაცია ანალოგიურია ბილეთ 1-ისა ($x$ და $y$ ადგილები იცვლება):
\\begin{itemize}
  \\item $yx<0$ (II, IV კვადრ.): $\\Delta>0$ \\textbf{— ჰიპერბოლური}
  \\item $yx>0$ (I, III კვადრ.): $\\Delta<0$ \\textbf{— ელიფსური}
  \\item ღერძები: $\\Delta=0$ \\textbf{— პარაბოლური}
\\end{itemize}

\\begin{center}
\\begin{tikzpicture}[scale=1.05]
  \\fill[pattern=north west lines, pattern color=red!55]
        (0,0) rectangle (2.6,2.6);
  \\fill[pattern=north west lines, pattern color=red!55]
        (-2.6,-2.6) rectangle (0,0);
  \\fill[pattern=north east lines, pattern color=blue!55]
        (-2.6,0) rectangle (0,2.6);
  \\fill[pattern=north east lines, pattern color=blue!55]
        (0,-2.6) rectangle (2.6,0);
  \\foreach \\x in {-2.3,-1.8,-1.3,-0.8,-0.3,0.3,0.8,1.3,1.8,2.3}{
    \\draw[green!60!black, line width=1.2pt] (\\x,-0.13) -- (\\x,0.13);
  }
  \\foreach \\y in {-2.3,-1.8,-1.3,-0.8,-0.3,0.3,0.8,1.3,1.8,2.3}{
    \\draw[green!60!black, line width=1.2pt] (-0.13,\\y) -- (0.13,\\y);
  }
  \\draw[->, thick] (-2.8,0) -- (2.9,0) node[right] {$x$};
  \\draw[->, thick] (0,-2.8) -- (0,2.9) node[above] {$y$};
  \\node[font=\\small, blue!80!black]  at (-1.4, 1.4) {ჰიპ.};
  \\node[font=\\small, red!75!black]   at ( 1.4, 1.4) {ელიფ.};
  \\node[font=\\small, blue!80!black]  at ( 1.4,-1.4) {ჰიპ.};
  \\node[font=\\small, red!75!black]   at (-1.4,-1.4) {ელიფ.};
  \\node[font=\\small,green!55!black]  at (4, 0) {პარ.};
  \\node[font=\\small,green!55!black]  at (0, 3.7) {პარ.};
\\end{tikzpicture}
\\end{center}

\\textit{$x<0, y>0$ — ჰიპერბოლური. მახასიათებელი:}
\\[
  y(dy)^2 + x(dx)^2 = 0
  \\;\\Rightarrow\\;
  y\\left(\\frac{dy}{dx}\\right)^2 + x = 0
  \\;\\Rightarrow\\;
  \\frac{dy}{dx} = \\pm\\sqrt{-\\frac{x}{y}} = \\pm\\frac{\\sqrt{-x}}{\\sqrt{y}}
\\]

\\textit{ცვლადები გამოვყოთ:}
$\\sqrt{y}\\,dy = \\pm\\sqrt{-x}\\,dx$

\\textit{ინტეგრირება:}
\\[
  \\int y^{\\frac{1}{2}}dy = \\pm\\int(-x)^{\\frac{1}{2}}dx
  \\;\\Rightarrow\\;
  \\frac{2}{3}y^{\\frac{3}{2}} = \\pm\\frac{2}{3}(-x)^{\\frac{3}{2}} + C
  \\;\\Rightarrow\\;
  y^{\\frac{3}{2}} \\pm (-x)^{\\frac{3}{2}} = c
\\]

\\textit{ახალი ცვლადები:}
\\[
  \\xi = y^{\\frac{3}{2}}+(-x)^{\\frac{3}{2}},\\quad
  \\eta = y^{\\frac{3}{2}}-(-x)^{\\frac{3}{2}}
\\]
\\[
  \\Rightarrow\\quad \\textbf{მთავარი ნაწილის კანონიკური სახე:}\\quad \\boxed{u_{\\xi\\eta}=0}
\\]
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 5 — $y^{2}u_{xx}-x^{2}u_{yy}=0$}

\\begin{problem}{პირობა}
მოცემულია $y^2u_{xx}-x^2u_{yy}=0$.\\\\
ა)~კლასიფიკაცია;\\quad ბ)~მთავარი ნაწილის კანონიკური სახე $x>0, y>0$ არეში.
\\end{problem}

\\begin{solution}
\\[
  A=y^2,\\quad 2B=0 \\Rightarrow B = 0/2 = 0,\\quad C=-x^2
  \\;\\Rightarrow\\; \\Delta = 0 - y^2\\cdot(-x^2) = x^2y^2
\\]

\\begin{itemize}
  \\item $xy\\neq0$: $\\Delta = x^2y^2 > 0$ \\textbf{— ჰიპერბოლური}
  \\item $x=0$ ან $y=0$: $\\Delta = 0$ \\textbf{— პარაბოლური}
  \\item ელიფსური არე — \\textbf{არ არსებობს} ($\\Delta\\geq 0$ ყოველთვის)
\\end{itemize}

\\begin{center}
\\begin{tikzpicture}[scale=1.0]
  \\fill[pattern=north east lines, pattern color=blue!55]
        (-2.6,-2.6) rectangle (2.6,2.6);
  \\fill[white] (-2.8,-0.15) rectangle (2.8,0.15);
  \\fill[white] (-0.15,-2.8) rectangle (0.15,2.8);
  \\draw[->, thick] (-2.8,0) -- (2.9,0) node[right] {$x$};
  \\draw[->, thick] (0,-2.8) -- (0,2.9) node[above] {$y$};
  \\foreach \\x in {-2.3,-1.8,-1.3,-0.8,-0.3,0.3,0.8,1.3,1.8,2.3}{
    \\draw[green!60!black, line width=1.3pt] (\\x,-0.14) -- (\\x,0.14);
  }
  \\foreach \\y in {-2.3,-1.8,-1.3,-0.8,-0.3,0.3,0.8,1.3,1.8,2.3}{
    \\draw[green!60!black, line width=1.3pt] (-0.14,\\y) -- (0.14,\\y);
  }
  \\node[font=\\small, blue!75!black] at ( 1.5, 1.5) {ჰიპ.};
  \\node[font=\\small, blue!75!black] at (-1.5,-1.5) {ჰიპ.};
  \\node[font=\\small, blue!75!black] at ( -1.5, 1.5) {ჰიპ.};
  \\node[font=\\small, blue!75!black] at (1.5,-1.5) {ჰიპ.};
  \\node[font=\\small,green!55!black]  at (4, 0) {პარ.};
  \\node[font=\\small,green!55!black]  at (0, 3.7) {პარ.};
\\end{tikzpicture}
\\end{center}

\\textit{$x>0, y>0$. მახასიათებელი:}
\\[
  y^2(dy)^2 - x^2(dx)^2 = 0
  \\;\\Rightarrow\\;
  y^2\\left(\\frac{dy}{dx}\\right)^2 = x^2
  \\;\\Rightarrow\\;
  \\frac{dy}{dx} = \\pm\\frac{x}{y}
\\]

\\textit{ცვლადები გამოვყოთ:}
$y\\,dy = \\pm x\\,dx$

\\textit{ინტეგრირება:}
\\[
  \\frac{y^2}{2} = \\pm\\frac{x^2}{2} + C
  \\;\\Rightarrow\\;
  y^2 \\mp x^2 = C
\\]

\\textit{ახალი ცვლადები:}
\\[
  \\xi = y^2 + x^2,\\quad \\eta = y^2 - x^2
\\]
\\[
  \\Rightarrow\\quad \\textbf{მთავარი ნაწილის კანონიკური სახე:}\\quad \\boxed{u_{\\xi\\eta}=0}
\\]
\\end{solution}

% ================================================================
\\newpage
\\section{კითხვა 5 — ტალღური განტოლება, დალამბერის ფორმულა}
% ================================================================

\\subsection*{მოკლე და სწრაფი თეორიული შესავალი}

\\subsubsection*{ფიზიკური კონტექსტი: სიმის რხევა}

წარმოიდგინეთ გამოჭიმული სიმი. თუ მას $t=0$ მომენტში ვამოძრავებთ,
სიმი ვიბრირებს. $u(x, t)$ — ეს სიმის $x$ წერტილის ვერტიკალური
გადახრაა $t$ დროს.

ეს გადახრა აღიწერება ტალღური განტოლებით:
\\[
  u_{tt} - a^2 u_{xx} = 0
\\]
სადაც $a = \\sqrt{\\dfrac{T}{\\rho}}$ — ტალღის გავრცელების სიჩქარეა
($T$ — დაჭიმულობა, $\\rho$ — სიმის სიმკვრივე).

\\subsubsection*{1. უსასრულო სიმი}

\\[
  u_{tt} - a^2 u_{xx} = 0,\\quad -\\infty < x < \\infty,\\quad t>0
\\]

საწყისი პირობები:
\\[
  u(x,0) = \\varphi(x) \\quad\\text{(საწყისი ფორმა/პროფილი)},\\quad
  u_t(x,0) = \\psi(x) \\quad\\text{(საწყისი სიჩქარე)}
\\]

\\textbf{დალამბერის ფორმულა:}
\\[
  u(x,t) = \\frac{1}{2}\\bigl[\\varphi(x-at)+\\varphi(x+at)\\bigr]
  + \\frac{1}{2a}\\int_{x-at}^{x+at}\\psi(\\tau)\\,d\\tau
\\]

\\textbf{განსაკუთრებული შემთხვევა $\\psi\\equiv0$:}

თუ საწყისი სიჩქარე ნულია ($\\psi\\equiv0$), ინტეგრალური წევრი ქრება და ფორმულა მარტივდება:
\\[
  u(x,t) = \\frac{1}{2}\\bigl[\\varphi(x-at)+\\varphi(x+at)\\bigr]
\\]
საწყისი პროფილი $\\varphi(x)$ იყოფა ორ ტოლ ნახევარ-ამპლიტუდიან ტალღად — ერთი $+a$ სიჩქარით მარჯვნივ, მეორე $-a$ სიჩქარით მარცხნივ მოძრაობს.

\\subsubsection*{2. ნახევრად უსასრულო სიმი — დამაგრებული ბოლო}

\\[
  u_{tt} - a^2 u_{xx} = 0,\\quad 0 < x < \\infty,\\quad t>0
\\]

სასაზღვრო პირობა: $u(0,t)=0$ (სიმი $x=0$ წერტილში მაგრადაა მიმაგრებული).

\\textbf{გამოსავალი — კენტი გაგრძელება (odd extension):}

\\[
  \\Phi(x) = \\begin{cases}\\varphi(x), & x\\geq0\\\\ -\\varphi(-x), & x<0\\end{cases}
\\]

შემდეგ ვიყენებთ:
\\[
  u(x,t) = \\frac{1}{2}\\bigl[\\Phi(x-at)+\\Phi(x+at)\\bigr]
\\]

\\subsubsection*{3. ნახევრად უსასრულო სიმი — თავისუფალი ბოლო}

\\[
  u_{tt} - a^2 u_{xx} = 0,\\quad 0 < x < \\infty,\\quad t>0
\\]

სასაზღვრო პირობა: $u_x(0,t)=0$ (სიმის ბოლო თავისუფლად მოძრაობს).

\\textbf{გამოსავალი — ლუწი გაგრძელება (even extension):}

\\[
  \\Phi(x) = \\begin{cases}\\varphi(x), & x\\geq0\\\\ \\varphi(-x), & x<0\\end{cases}
\\]

შემდეგ ვიყენებთ:
\\[
  u(x,t) = \\frac{1}{2}\\bigl[\\Phi(x-at)+\\Phi(x+at)\\bigr]
\\]

\\subsection*{უფრო დეტალური თეორიული შესავალი}


\\subsubsection*{1. უსასრულო სიმის რხევის განტოლება:}
\\begin{equation*}
u_{tt} - a^2 u_{xx} = 0, \\quad -\\infty < x < \\infty, \\quad t>0
\\end{equation*}
სადაც $a$ - ტალღის გავრცელების სიჩქარეა.

\\textbf{საწყისი პირობები:}
\\begin{align*}
u(x,0) &= \\varphi(x) \\quad \\text{(საწყისი პროფილი/ფორმა)} \\\\
u_t(x,0) &= \\psi(x) \\quad \\text{(საწყისი სიჩქარე)}
\\end{align*}

დალამბერის ფორმულის თანახმად, ამ განტოლების ამონახსნი ორი ტალღის ჯამია (რომელთაგან $\\frac{1}{2}\\varphi(x-at)$ მარჯვნივ, ხოლო $\\frac{1}{2}\\varphi(x+at)$ მარცხნივ მოძრაობს):
\\begin{equation*}
u(x,t) = \\frac{1}{2} [\\varphi(x-at) + \\varphi(x+at)] + \\frac{1}{2a} \\int_{x-at}^{x+at} \\psi(\\tau) d\\tau
\\end{equation*}

ცხადია, რომ როცა $\\psi(x) \\equiv 0$:
\\begin{equation*}
u(x,t) = \\frac{1}{2} [\\varphi(x-at) + \\varphi(x+at)]
\\end{equation*}
ამ ფორმულის ძირითადი აზრი მდგომარეობს იმაში, რომ მოცემული საწყისი $\\varphi(x)$ პროფილი იყოფა 2 ნაწილად და მისი ერთი ნახევარი მარცხნივ $a$ სიჩქარით, ხოლო მეორე ნახევარი მარჯვნივ $-a$ სიჩქარით მოძრაობს. (აღვნიშნოთ, რომ რადგან $\\psi(x) \\equiv 0$, ჩვენი ახლად მიღებული ტალღების ამპლიტუდა, როგორც ფორმულიდანაც ჩანს, საწყისი ამპლიტუდის ნახევარი იქნება). რადგან მოცემული სიმი უსასრულოა, არ მოხდება არანაირი არეკვლა.

\\vspace{0.5cm}

\\subsubsection*{2. ნახევრად უსასრულო სიმის რხევა (დამაგრებული ბოლო):}
ნახევრად უსასრულო სიმისთვის ($0 \\le x < \\infty$) ტალღური განტოლების ამოხსნისას სტანდარტული დალამბერის ფორმულის უშუალოდ გამოყენება შეუძლებელია, რადგან ფორმულაში წარმოიქმნება შემთხვევები, როცა $x-at < 0$, და სიმი ამ კოორდინატებში არ არსებობს.

როდესაც სიმის ბოლო დამაგრებულია, ამოცანის მთელ რიცხვთა ღერძზე ($-\\infty < x < \\infty$) გასაგრძელებლად ვიყენებთ „კენტად გაგრძელების“ (odd extension) მეთოდს. საწყის პირობებს $x=0$ წერტილის მიმართ კენტი ფუნქციის სახით ვაგრძელებთ უარყოფით ღერძზე.

ეს მათემატიკური ხერხი ფიზიკურად ასახავს ტალღის მყარ დაბრკოლებაზე შეჯახებისას არეკვლის დროს ფაზის $180^\\circ$-ით შეცვლას (ანუ ამოტრიალებას). წარმოიდგინეთ, რომ სიმის ერთი ბოლო ($x=0$ წერტილი) მყარადაა მიმაგრებული კედელზე. სიმზე გამავალი ტალღა კედელთან შეჯახებისას კედელზე მოქმედებს ზევით მიმართული ძალით, მაგრამ რადგან სიმი დამაგრებულია, ის ზევით ვერ ავა, და ნიუტონის III კანონის თანახმად, კედელიც მოქმედებს სიმზე იგივე სიდიდის, მაგრამ საპირისპიროდ (ქვევით) მიმართული ძალით. შედეგად, კედლიდან არეკვლისას ტალღა იცვლის ფაზას და გადმოტრიალდება.

სიმს $x<0$ არეში ისე ვაგრძელებთ, რომ ფუნქცია იყოს კენტი. ამისთვის განვსაზღვრავთ ახალ $\\Phi(x)$ ფუნქციას:
\\begin{equation*}
\\Phi(x) =
\\begin{cases}
\\varphi(x), & x \\ge 0 \\\\
-\\varphi(-x), & x < 0
\\end{cases}
\\end{equation*}

\\vspace{0.5cm}

\\subsubsection*{3. ნახევრად უსასრულო სიმის რხევა (თავისუფალი ბოლო):}
დამაგრებული ბოლოს მსგავსად, თავისუფალი ბოლოს მქონე ნახევრად უსასრულო სიმისთვისაც დალამბერის ფორმულის პირდაპირ გამოყენება არ შეგვიძლია. 

რადგან სიმის ბოლო თავისუფალია, ამოცანის მთელ რიცხვთა ღერძზე გასაგრძელებლად ვიყენებთ „ლუწად გაგრძელების“ (even extension) მეთოდს. საწყის პირობებს $x=0$ წერტილის მიმართ ლუწი ფუნქციის სახით ვაგრძელებთ უარყოფით ღერძზე.

ეს მათემატიკური ხერხი ფიზიკურად ნიშნავს ტალღის თავისუფალი ბო\\-ლო\\-დან არეკვლისას ფაზის შეუცვლელად (ანუ ამოუტრიალებლად) იმავე მიმარ\\-თუ\\-ლე\\-ბით დაბრუნებას. რატომ ხდება ასე? რეალურ ცხოვრებაში წარმოიდგინეთ, რომ სიმის ერთი ბოლო ($x=0$ წერტილი) თავისუფალია (მაგალითად, ბოლოზე დამაგრებულია უწონო რგოლი, რომელსაც ხახუნის გარეშე შეუძლია მოძრაობა ვერტიკალურ ღერძზე). სიმზე გამავალი ტალღა ბოლოში მისვლისას მას თავისუფლად სწევს ზევით. მყარი კედ\\-ლის\\-გან განსხვავებით, აქ ბოლოს ქვემოთ დამქაჩავი რეაქციის ძალა არ არსებობს. შედეგად, ტალღა თავისუფალი ბოლოდან არეკვლისას ფაზას არ იცვლის და ისე ბრუნდება უკან.

სიმს $x<0$ არეში ისე ვაგრძელებთ, რომ ფუნქცია იყოს ლუწი. ამისთვის განვსაზღვრავთ ახალ $\\Phi(x)$ ფუნქციას:
\\begin{equation*}
\\Phi(x) =
\\begin{cases}
\\varphi(x), & x \\ge 0 \\\\
\\varphi(-x), & x < 0
\\end{cases}
\\end{equation*}

\\vspace{1cm}
% ----------------------------------------------------------------
\\subsection{ბილეთი 1 — უსასრულო სიმი}

\\begin{problem}{პირობა}
$u_{tt}-4u_{xx}=0$, $-\\infty<x<\\infty$, $t>0$;\\quad
$u(x,0)=\\varphi(x)$, $u_t(x,0)=0$.

\\begin{center}
\\begin{tikzpicture}[scale=0.75]
\\draw[->] (-5,0) -- (5,0) node[right] {$x$};
\\draw[->] (0,-0.5) -- (0,5) node[above] {$u$};
\\draw[very thick] (-4,0)--(-2,2)--(0,0)--(2,4)--(4,0);
\\draw[dashed] (-2,0)node[below]{$-2$}--(-2,2)--(0,2)node[right]{$2$};
\\draw[dashed] (2,0)node[below]{$2$}--(2,4)--(0,4)node[left]{$4$};
\\node[below] at (-4,0){$-4$}; \\node[below] at (4,0){$4$};
\\node[above right, font=\\small] at (4,1.5){$\\varphi(x)$};
\\end{tikzpicture}
\\end{center}

ა)~მაქსიმალური გადახრა;\\quad ბ)~სიმის ფორმა $t=3$-ზე.
\\end{problem}

\\begin{solution}

\\textbf{ნაბიჯი 1 — ამოვიკითხოთ $a$:}
\\[
  u_{tt}-4u_{xx}=0 \\;\\Rightarrow\\; a^2=4 \\;\\Rightarrow\\; a=2
\\]

\\textbf{ა) მაქსიმალური გადახრა:}

$t=0$-ზე: $\\max\\varphi(x) = 4$. $t>0$-ზე დალამბერის ფორმულის მიხედვით,
ყოველი ამპლიტუდა ნახევრდება. ორი ტალღა სხვადასხვა კვეთაში
მოძრაობს, ამიტომ ამპლიტუდა ვერ გადააჭარბებს $4$-ს.

\\textbf{პასუხი: $u_{\\max} = 4$.}

\\medskip
\\textbf{ბ) $t=3$-ზე სიმის ფორმა:}

$\\psi\\equiv0$ ფორმულა:
\\[
  u(x,3) = \\frac{1}{2}\\varphi(x-2\\cdot3)+\\frac{1}{2}\\varphi(x+2\\cdot3)
  = \\frac{1}{2}\\varphi(x-6)+\\frac{1}{2}\\varphi(x+6)
\\]

\\textbf{ნაბიჯი 1 — მარჯვენა ტალღა $\\frac{1}{2}\\varphi(x-6)$:}

ორიგინალი $[-4,4]$ ინტერვალი $[2,10]$-ზე გადადის, ამპლიტუდა განახევრ\\-დე\\-ბა.
\\begin{center}
\\begin{tikzpicture}[scale=0.6]
\\draw[->] (-1,0) -- (12,0) node[right] {$x$};
\\draw[->] (0,-0.5) -- (0,3) node[above] {$u$};
\\draw[thick] (2,0)--(4,1)--(6,0)--(8,2)--(10,0);
\\draw[dashed] (4,0)node[below]{$4$}--(4,1)--(0,1)node[left]{$1$};
\\draw[dashed] (8,0)node[below]{$8$}--(8,2)--(0,2)node[left]{$2$};
\\node[below] at (2,0){$2$}; \\node[below] at (6,0){$6$};
\\node[below] at (10,0){$10$};
\\node[above, font=\\small] at (7,2.2){$\\tfrac{1}{2}\\varphi(x-6)$};
\\end{tikzpicture}
\\end{center}

\\textbf{ნაბიჯი 2 — მარცხენა ტალღა $\\frac{1}{2}\\varphi(x+6)$:}

ორიგინალი $[-4,4]$-დან $[-10,-2]$-ზე გადავიდა, ამპლიტუდა განახევრდება.
\\begin{center}
\\begin{tikzpicture}[scale=0.6]
\\draw[->] (-11,0) -- (2,0) node[right] {$x$};
\\draw[->] (0,-0.5) -- (0,3) node[above] {$u$};
\\draw[thick] (-10,0)--(-8,1)--(-6,0)--(-4,2)--(-2,0);
\\draw[dashed] (-8,0)node[below]{$-8$}--(-8,1)--(0,1)node[right]{$1$};
\\draw[dashed] (-4,0)node[below]{$-4$}--(-4,2)--(0,2)node[right]{$2$};
\\node[below] at (-10,0){$-10$}; \\node[below] at (-6,0){$-6$};
\\node[below] at (-2,0){$-2$};
\\node[above, font=\\small] at (-7,2.2){$\\tfrac{1}{2}\\varphi(x+6)$};
\\end{tikzpicture}
\\end{center}

\\textbf{ნაბიჯი 3 — ჯამი (ორი ტალღა სხვადასხვა ინტერვალზეა, ამიტომ უბრალოდ ერთად გამოვსახავთ):}
\\begin{center}
\\begin{tikzpicture}[scale=0.7, >=stealth]
    \\draw[->, thick] (-11.5,0) -- (11.5,0) node[right] {$x$};
    \\draw[->, thick] (0,-0.5) -- (0,3.5) node[above] {$u$};
    \\draw[dashed, thin] (-8,0) -- (-8,1) -- (0,1);
    \\draw[dashed, thin] (4,0) -- (4,1) -- (0,1);
    \\draw[dashed, thin] (-4,0) -- (-4,2) -- (0,2);
    \\draw[dashed, thin] (8,0) -- (8,2) -- (0,2);
    \\draw[very thick] (-10,0) -- (-8,1) -- (-6,0) -- (-4,2) -- (-2,0) -- (2,0) -- (4,1) -- (6,0) -- (8,2) -- (10,0);
    \\node[below] at (-10,0) {$-10$};
    \\node[below] at (-8,0) {$-8$};
    \\node[below] at (-6,0) {$-6$};
    \\node[below] at (-4,0) {$-4$};
    \\node[below] at (-2,0) {$-2$};
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (2,0) {$2$};
    \\node[below] at (4,0) {$4$};
    \\node[below] at (6,0) {$6$};
    \\node[below] at (8,0) {$8$};
    \\node[below] at (10,0) {$10$};
    \\node[above left] at (0,1) {$1$};
    \\node[above left] at (0,2) {$2$};
    \\fill (-10,0) circle (1.5pt);
    \\fill (-8,1) circle (1.5pt);
    \\fill (-6,0) circle (1.5pt);
    \\fill (-4,2) circle (1.5pt);
    \\fill (-2,0) circle (1.5pt);
    \\fill (2,0) circle (1.5pt);
    \\fill (4,1) circle (1.5pt);
    \\fill (6,0) circle (1.5pt);
    \\fill (8,2) circle (1.5pt);
    \\fill (10,0) circle (1.5pt);
\\end{tikzpicture}
\\end{center}
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 2 — ნახევრად უსასრულო სიმი, დამაგ\\-რე\\-ბუ\\-ლი ბოლო}

\\begin{problem}{პირობა}
$u_{tt}-4u_{xx}=0$, $0<x<\\infty$, $t>0$;\\quad
$u(0,t)=0$, $u(x,0)=\\varphi(x)$, $u_t(x,0)=0$.
\\begin{center}
\\begin{tikzpicture}[scale=0.7, >=stealth]
    \\draw[->, thick] (-1,0) -- (16,0) node[right] {$x$};
    \\draw[->, thick] (0,-0.5) -- (0,5.5) node[above] {$u$};
    \\draw[dashed, thin] (4,0) -- (4,4) -- (0,4);
    \\draw[dashed, thin] (12,0) -- (12,4) -- (0,4);
    \\draw[very thick] (0,0) -- (2,0) -- (4,4) -- (6,0) -- (10,0) -- (12,4) -- (14,0) -- (15,0);
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (2,0) {$2$};
    \\node[below] at (4,0) {$4$};
    \\node[below] at (6,0) {$6$};
    \\node[below] at (10,0) {$10$};
    \\node[below] at (12,0) {$12$};
    \\node[below] at (14,0) {$14$};
    \\node[left] at (0,4) {$4$};
    \\node[above right, font=\\small] at (14,3) {$\\varphi(x)$};
    \\fill (0,0) circle (1.5pt);
    \\fill (2,0) circle (1.5pt);
    \\fill (4,4) circle (1.5pt);
    \\fill (6,0) circle (1.5pt);
    \\fill (10,0) circle (1.5pt);
    \\fill (12,4) circle (1.5pt);
    \\fill (14,0) circle (1.5pt);
    \\fill (15,0) circle (1.5pt);
\\end{tikzpicture}
\\end{center}
ა)~ამოხსნის მეთოდი;\\quad ბ)~მაქსიმალური გადახრა და მისი სიხშირე.
\\end{problem}

\\begin{solution}

\\textbf{ა) კენტი გაგრძელება ($u(0,t)=0$):}

\\textit{ნაბიჯი 1 — განვსაზღვრავთ $\\Phi(x)$:}
\\[
  \\Phi(x) = \\begin{cases}\\varphi(x), & x\\geq0\\\\ -\\varphi(-x), & x<0\\end{cases}
\\]

\\textit{ნაბიჯი 2 — კენტი გაგრძელების გრაფიკი ($x<0$-ზე ორიგინალი ასახვას გადის და ნიშანი იცვლება):}

\\begin{center}
\\begin{tikzpicture}[scale=0.5, >=stealth]
    \\draw[->, thick] (-16,0) -- (16,0) node[right] {$x$};
    \\draw[->, thick] (0,-5.5) -- (0,5.5) node[above] {$u$};
    \\draw[dashed, thin] (4,0) -- (4,4) -- (0,4);
    \\draw[dashed, thin] (12,0) -- (12,4) -- (0,4);
    \\draw[dashed, thin] (-4,0) -- (-4,-4) -- (0,-4);
    \\draw[dashed, thin] (-12,0) -- (-12,-4) -- (0,-4);
    \\draw[very thick] (0,0) -- (2,0) -- (4,4) -- (6,0) -- (10,0) -- (12,4) -- (14,0) -- (15,0);
    \\draw[very thick] (0,0) -- (-2,0) -- (-4,-4) -- (-6,0) -- (-10,0) -- (-12,-4) -- (-14,0) -- (-15,0);
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (2,0) {$2$};
    \\node[below] at (4,0) {$4$};
    \\node[below] at (6,0) {$6$};
    \\node[below] at (10,0) {$10$};
    \\node[below] at (12,0) {$12$};
    \\node[below] at (14,0) {$14$};
    \\node[above] at (-2,0) {$-2$};
    \\node[above] at (-4,0) {$-4$};
    \\node[above] at (-6,0) {$-6$};
    \\node[above] at (-10,0) {$-10$};
    \\node[above] at (-12,0) {$-12$};
    \\node[above] at (-14,0) {$-14$};
    \\node[left] at (0,4) {$4$};
    \\node[right] at (0,-4) {$-4$};
    \\node[above right, font=\\small] at (12,4) {$\\varphi(x)$};
    \\node[below left, font=\\small] at (-12,-4) {$-\\varphi(-x)$};
    \\foreach \\p in {(0,0), (2,0), (4,4), (6,0), (10,0), (12,4), (14,0), (-2,0), (-4,-4), (-6,0), (-10,0), (-12,-4), (-14,0)}
        \\fill \\p circle (2pt);
\\end{tikzpicture}
\\end{center}

\\textit{ნაბიჯი 3 — ფორმულა ($a=2$):}
\\[
  u(x,t) = \\frac{1}{2}\\bigl[\\Phi(x-2t)+\\Phi(x+2t)\\bigr]
\\]

\\medskip
\\textbf{ბ) მაქსიმალური გადახრა:}

$t=0$-ზე: $u_{\\max}=4$.

$t>0$-ზე ყოველი პიკი ორ ნახევარ-ამპლიტუდიან ($=2$) ტალღად
იყოფება.

$x=4$-ის მარჯვენა ტალღა შეხვდება $x=12$-ის მარცხენა ტალღას:
\\[
  4+2t = 12-2t \\;\\Rightarrow\\; 4t=8 \\;\\Rightarrow\\; t=2
\\]
შეხვედრის წერტილი: $x=4+2\\cdot2=8$.

\\textit{გადახრა $t=2$, $x=8$-ზე:}
\\[
  u(8,2) = \\frac{1}{2}\\Phi(4)+\\frac{1}{2}\\Phi(12)
  = \\frac{1}{2}\\cdot4+\\frac{1}{2}\\cdot4 = 4
\\]

\\textbf{პასუხი:} მაქსიმალური გადახრა = \\textbf{4}; ეს ხდება \\textbf{2-ჯერ} ($t=0$ და $t=2$).

\\textit{$t=2$ მომენტის გრაფიკი:}

\\begin{center}
\\begin{tikzpicture}[scale=0.55]
\\draw[->] (-0.5,0)--(19,0) node[right]{$x$};
\\draw[->] (0,-0.5)--(0,5) node[above]{$u$};
\\draw[very thick] (0,0)--(6,0);
\\draw[very thick] (6,0)--(8,4)--(10,0);
\\draw[dashed] (8,0)node[below]{$8$}--(8,4)--(0,4)node[left]{$4$};
\\draw[very thick] (10,0)--(14,0);
\\draw[very thick] (14,0)--(16,2)--(18,0);
\\draw[dashed] (16,0)node[below]{$16$}--(16,2)--(0,2)node[left]{$2$};
\\node[below] at (6,0){$6$};\\node[below] at (10,0){$10$};
\\node[below] at (14,0){$14$};\\node[below] at (18,0){$18$};
\\node[above, font=\\small] at (9,4.7){$t=2$ მომენტი};
\\end{tikzpicture}
\\end{center}
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთები 3 \\& 6 — ნახევრად უსასრულო სიმი, თა\\-ვი\\-სუ\\-ფა\\-ლი ბოლო}

\\begin{problem}{პირობა}
$u_{tt}-4u_{xx}=0$, $0<x<\\infty$, $t>0$;\\quad
$u_x(0,t)=0$, $u(x,0)=\\varphi(x)$, $u_t(x,0)=0$\\\\
(ბილეთი 2-ის იგივე $\\varphi(x)$ პროფილი).

ა)~ამოხსნის მეთოდი;\\quad ბ)~მაქსიმალური გადახრა.
\\end{problem}

\\begin{solution}

\\textbf{ა) ლუწი გაგრძელება ($u_x(0,t)=0$):}

\\textit{ნაბიჯი 1 — $\\Phi(x)$:}
\\[
  \\Phi(x) = \\begin{cases}\\varphi(x), & x\\geq0\\\\ \\varphi(-x), & x<0\\end{cases}
\\]

\\textit{ნაბიჯი 2 — ლუწი გაგრძელების გრაფიკი ($x<0$-ზე ასახვა ნიშნის შეცვლის გარეშე):}

\\begin{center}
\\begin{tikzpicture}[scale=0.5, >=stealth]
    \\draw[->, thick] (-16,0) -- (16,0) node[right] {$x$};
    \\draw[->, thick] (0,-1) -- (0,5.5) node[above] {$u$};
    \\draw[dashed, thin] (4,0) -- (4,4) -- (0,4);
    \\draw[dashed, thin] (12,0) -- (12,4) -- (0,4);
    \\draw[dashed, thin] (-4,0) -- (-4,4) -- (0,4);
    \\draw[dashed, thin] (-12,0) -- (-12,4) -- (0,4);
    \\draw[very thick] (0,0) -- (2,0) -- (4,4) -- (6,0) -- (10,0) -- (12,4) -- (14,0) -- (15,0);
    \\draw[very thick] (0,0) -- (-2,0) -- (-4,4) -- (-6,0) -- (-10,0) -- (-12,4) -- (-14,0) -- (-15,0);
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (2,0) {$2$};
    \\node[below] at (4,0) {$4$};
    \\node[below] at (6,0) {$6$};
    \\node[below] at (10,0) {$10$};
    \\node[below] at (12,0) {$12$};
    \\node[below] at (14,0) {$14$};
    \\node[below] at (-2,0) {$-2$};
    \\node[below] at (-4,0) {$-4$};
    \\node[below] at (-6,0) {$-6$};
    \\node[below] at (-10,0) {$-10$};
    \\node[below] at (-12,0) {$-12$};
    \\node[below] at (-14,0) {$-14$};
    \\node[above left] at (0,4) {$4$};
    \\node[above right, font=\\small] at (12,4) {$\\varphi(x)$};
    \\node[above left, font=\\small] at (-12,4) {$\\varphi(-x)$};
    \\foreach \\p in {(0,0), (2,0), (4,4), (6,0), (10,0), (12,4), (14,0), (-2,0), (-4,4), (-6,0), (-10,0), (-12,4), (-14,0)}
        \\fill \\p circle (2pt);
\\end{tikzpicture}
\\end{center}

\\textit{ნაბიჯი 3 — ფორმულა ($a=2$):}
\\[
  u(x,t) = \\frac{1}{2}\\bigl[\\Phi(x-2t)+\\Phi(x+2t)\\bigr]
\\]

\\medskip
\\textbf{ბ) მაქსიმალური გადახრა:}

$4+2t = 12-2t \\;\\Rightarrow\\; t=2$, $x=8$:
\\[
  u(8,2) = \\frac{1}{2}\\varphi(4)+\\frac{1}{2}\\varphi(12)
  = 2+2 = 4
\\]

ასევე $x=4$-ის მარცხნივ მოძრავი ტალღა $t=2$-ზე $x=0$-ს აღწევს:
\\[
  u(0,2) = \\frac{1}{2}\\Phi(-4)+\\frac{1}{2}\\Phi(4)
  = \\frac{1}{2}\\varphi(4)+\\frac{1}{2}\\varphi(4) = 2+2 = 4
\\]

\\textbf{პასუხი:} მაქსიმალური გადახრა = \\textbf{4}.
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთი 4 — უსასრულო სიმი, ანტისიმეტრიული პროფილი}

\\begin{problem}{პირობა}
$u_{tt}-4u_{xx}=0$, $-\\infty<x<\\infty$, $t>0$;\\quad
$u(x,0)=\\varphi(x)$, $u_t(x,0)=0$.
\\begin{center}
\\begin{tikzpicture}[scale=0.7, >=stealth]
    \\draw[->, thick] (-10,0) -- (10,0) node[right] {$x$};
    \\draw[->, thick] (0,-3.5) -- (0,3.5) node[above] {$u$};
    \\draw[dashed, thin] (6,0) -- (6,2) -- (0,2);
    \\draw[dashed, thin] (-6,0) -- (-6,-2) -- (0,-2);
    \\draw[very thick] (4,0) -- (6,2) -- (8,0);
    \\draw[very thick] (-4,0) -- (-6,-2) -- (-8,0);
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (4,0) {$4$};
    \\node[below] at (6,0) {$6$};
    \\node[below] at (8,0) {$8$};
    \\node[above] at (-4,0) {$-4$};
    \\node[above] at (-6,0) {$-6$};
    \\node[above] at (-8,0) {$-8$};
    \\node[left] at (0,2) {$2$};
    \\node[right] at (0,-2) {$-2$};
    \\fill (4,0) circle (2pt);
    \\fill (6,2) circle (2pt);
    \\fill (8,0) circle (2pt);
    \\fill (-4,0) circle (2pt);
    \\fill (-6,-2) circle (2pt);
    \\fill (-8,0) circle (2pt);
\\end{tikzpicture}
\\end{center}
ა)~მაქსიმალური გადახრა;\\quad ბ)~სიმის ფორმა $t=3$-ზე.
\\end{problem}

\\begin{solution}

\\textbf{ა) მაქსიმალური გადახრა:}

$t=0$-ზე: $u_{\\max}=2$. $t>0$-ზე $+2$ პიკი ორ $\\pm1$ ტალღად იყოფება,
$-2$ პიკი — ასევე ორ $\\mp1$ ტალღად. შეხვედრისას $+1$ და $-1$
ერთმანეთს გაბათილებს, ამიტომ ამპლიტუდა $2$-ს ვერ გადააჭარბებს.

\\textbf{პასუხი: $u_{\\max}=2$} (მხოლოდ $t=0$-ზე).

\\medskip
\\textbf{ბ) $t=3$-ზე:}
\\[
  u(x,3) = \\frac{1}{2}\\varphi(x-6)+\\frac{1}{2}\\varphi(x+6)
\\]

\\textbf{ნაბიჯი 1 — $\\frac{1}{2}\\varphi(x-6)$:}

$+2$ ტალღა $[4,8]\\to[10,14]$, ამპლიტუდა $1$; $-2$ ტალღა $[-8,-4]\\to[-2,2]$, ამპლიტუდა $-1$.

\\begin{center}
\\begin{tikzpicture}[scale=0.7, >=stealth]
    \\draw[->, thick] (-4.5,0) -- (16.5,0) node[right] {$x$};
    \\draw[->, thick] (0,-2.5) -- (0,2.5) node[above] {$u$};
    \\draw[dashed, thin] (12,0) -- (12,1) -- (0,1);
    \\draw[very thick] (10,0) -- (12,1) -- (14,0);
    \\draw[very thick] (-2,0) -- (0,-1) -- (2,0);
    \\node[above left] at (0,0) {$0$};
    \\node[below] at (10,0) {$10$};
    \\node[below] at (12,0) {$12$};
    \\node[below] at (14,0) {$14$};
    \\node[above left] at (-2,0) {$-2$};
    \\node[above] at (2,0) {$2$};
    \\node[above left] at (0,1) {$1$};
    \\node[below left] at (0,-1) {$-1$};
    \\node[right, font=\\small] at (14.5, 1) {$\\frac{1}{2}\\varphi(x-6)$};
    \\fill (10,0) circle (2pt);
    \\fill (12,1) circle (2pt);
    \\fill (14,0) circle (2pt);
    \\fill (-2,0) circle (2pt);
    \\fill (0,-1) circle (2pt);
    \\fill (2,0) circle (2pt);
\\end{tikzpicture}
\\end{center}

\\textbf{ნაბიჯი 2 — $\\frac{1}{2}\\varphi(x+6)$:}

$+2$ ტალღა $[4,8]\\to[-2,2]$, ამპლიტუდა $1$; $-2$ ტალღა $[-8,-4]\\to[-14,-10]$, ამპლიტუდა $-1$.

\\begin{center}
\\begin{tikzpicture}[scale=0.7, >=stealth]
    \\draw[->, thick] (-16.5,0) -- (4.5,0) node[right] {$x$};
    \\draw[->, thick] (0,-2.5) -- (0,2.5) node[above] {$u$};
    \\draw[dashed, thin] (-12,0) -- (-12,-1) -- (0,-1);
    \\draw[very thick] (-2,0) -- (0,1) -- (2,0);
    \\draw[very thick] (-10,0) -- (-12,-1) -- (-14,0);
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (2,0) {$2$};
    \\node[below left] at (-2,0) {$-2$};
    \\node[above] at (-10,0) {$-10$};
    \\node[above] at (-12,0) {$-12$};
    \\node[above] at (-14,0) {$-14$};
    \\node[above right] at (0,1) {$1$};
    \\node[right] at (0,-1) {$-1$};
    \\node[left, font=\\small] at (-13.5, -1) {$\\frac{1}{2}\\varphi(x+6)$};
    \\fill (-2,0) circle (2pt);
    \\fill (0,1) circle (2pt);
    \\fill (2,0) circle (2pt);
    \\fill (-10,0) circle (2pt);
    \\fill (-12,-1) circle (2pt);
    \\fill (-14,0) circle (2pt);
\\end{tikzpicture}
\\end{center}

\\textbf{ნაბიჯი 3 — ჯამი:}

$[-2,2]$ ინტერვალზე $+1$ (ნაბიჯი 2) და $-1$ (ნაბიჯი 1) ტალღები ერთმანეთს გაბათილებს.
გარე ინტერვალებზე მხოლოდ ერთი ტალღა რჩება:

\\begin{center}
\\begin{tikzpicture}[scale=0.47, >=stealth]
    \\draw[->, thick] (-16,0) -- (16,0) node[right] {$x$};
    \\draw[->, thick] (0,-3) -- (0,3.5) node[above] {$u$};
    \\draw[dashed, thin] (12,0) -- (12,1) -- (0,1);
    \\draw[dashed, thin] (-12,0) -- (-12,-1) -- (0,-1);
    \\draw[very thick] (10,0) -- (12,1) -- (14,0);
    \\draw[very thick] (-14,0) -- (-12,-1) -- (-10,0);
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (10,0) {$10$};
    \\node[below] at (12,0) {$12$};
    \\node[below] at (14,0) {$14$};
    \\node[above] at (-10,0) {$-10$};
    \\node[above] at (-12,0) {$-12$};
    \\node[above] at (-14,0) {$-14$};
    \\node[left] at (0,1) {$1$};
    \\node[right] at (0,-1) {$-1$};
    \\foreach \\p in {(10,0), (12,1), (14,0), (-14,0), (-12,-1), (-10,0)}
        \\fill \\p circle (2pt);
\\end{tikzpicture}
\\end{center}

\\textit{შენიშვნა: $[-2,2]$ ინტერვალზე ორი ტალღა — $+1$ და $-1$ — გაბათილდება, ამიტომ $t=3$-ზე ამ ინტერვალში სიმი მოისვენებს.}
\\end{solution}

% ----------------------------------------------------------------
\\subsection{ბილეთები 5 \\& 7 — უსასრულო სიმი, სიმეტრიული ორ-პიკიანი პროფილი}

\\begin{problem}{პირობა}
$u_{tt}-4u_{xx}=0$, $-\\infty<x<\\infty$, $t>0$;\\quad
$u(x,0)=\\varphi(x)$, $u_t(x,0)=0$.

\\begin{center}
\\begin{tikzpicture}[scale=0.8, >=stealth]
    \\draw[->, thick] (-6,0) -- (6,0) node[right] {$x$};
    \\draw[->, thick] (0,-0.5) -- (0,5.5) node[above] {$u$};
    \\draw[dashed, thin] (-2,0) -- (-2,4) -- (0,4);
    \\draw[dashed, thin] (2,0) -- (2,4) -- (0,4);
    \\draw[very thick] (-5,0) -- (-4,0) -- (-2,4) -- (0,0) -- (2,4) -- (4,0) -- (5,0);
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (-4,0) {$-4$};
    \\node[below] at (-2,0) {$-2$};
    \\node[below] at (2,0) {$2$};
    \\node[below] at (4,0) {$4$};
    \\node[above left] at (0,4) {$4$};
    \\foreach \\p in {(-4,0), (-2,4), (0,0), (2,4), (4,0)}
        \\fill \\p circle (2pt);
\\end{tikzpicture}
\\end{center}

ა)~მაქსიმალური გადახრა;\\quad ბ)~სიმის ფორმა $t=2$-ზე.
\\end{problem}

\\begin{solution}

\\textbf{ა) მაქსიმალური გადახრა:}

$t=0$-ზე: $u_{\\max}=4$.

$t=1$-ზე: $x=2$-ის $+4$ პიკის მარცხნივ მოძრავი $+2$ ტალღა და $x=-2$-ის
პიკის მარჯვნივ მოძრავი $+2$ ტალღა ერთდროულად $x=0$-ს აღწევს:
\\[
  u(0,1) = \\frac{1}{2}\\varphi(-2)+\\frac{1}{2}\\varphi(2) = 2+2 = 4
\\]
ამიტომ $u_{\\max}=4$ შენარჩუნდება.

\\textbf{პასუხი: $u_{\\max}=4$.}

\\medskip
\\textbf{ბ) $t=2$-ზე:}
\\[
  u(x,2) = \\frac{1}{2}\\varphi(x-4)+\\frac{1}{2}\\varphi(x+4)
\\]

\\textbf{ნაბიჯი 1 — $\\frac{1}{2}\\varphi(x-4)$:}

ორიგინალი $[-4,4]\\to[0,8]$, ამპლიტუდა განახევრდება $4\\to2$.

\\begin{center}
\\begin{tikzpicture}[scale=0.7, >=stealth]
    \\draw[->, thick] (-1,0) -- (10,0) node[right] {$x$};
    \\draw[->, thick] (0,-1) -- (0,4) node[above] {$u$};
    \\draw[dashed, thin] (2,0) -- (2,2) -- (0,2);
    \\draw[dashed, thin] (6,0) -- (6,2) -- (0,2);
    \\draw[very thick] (0,0) -- (2,2) -- (4,0) -- (6,2) -- (8,0);
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (2,0) {$2$};
    \\node[below] at (4,0) {$4$};
    \\node[below] at (6,0) {$6$};
    \\node[below] at (8,0) {$8$};
    \\node[left] at (0,2) {$2$};
    \\node[above, font=\\small] at (8, 2.3) {$\\frac{1}{2}\\varphi(x-4)$};
    \\foreach \\p in {(0,0), (2,2), (4,0), (6,2), (8,0)}
        \\fill \\p circle (2pt);
\\end{tikzpicture}
\\end{center}

\\textbf{ნაბიჯი 2 — $\\frac{1}{2}\\varphi(x+4)$:}

ორიგინალი $[-4,4]\\to[-8,0]$, ამპლიტუდა განახევრდება $4\\to2$.

\\begin{center}
\\begin{tikzpicture}[scale=0.7, >=stealth]
    \\draw[->, thick] (-9.5,0) -- (1.5,0) node[right] {$x$};
    \\draw[->, thick] (0,-1) -- (0,4) node[above] {$u$};
    \\draw[dashed, thin] (-6,0) -- (-6,2) -- (0,2);
    \\draw[dashed, thin] (-2,0) -- (-2,2) -- (0,2);
    \\draw[very thick] (-8,0) -- (-6,2) -- (-4,0) -- (-2,2) -- (0,0);
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (-2,0) {$-2$};
    \\node[below] at (-4,0) {$-4$};
    \\node[below] at (-6,0) {$-6$};
    \\node[below] at (-8,0) {$-8$};
    \\node[right] at (0,2) {$2$};
    \\node[above, font=\\small] at (-8, 2.3) {$\\frac{1}{2}\\varphi(x+4)$};
    \\foreach \\p in {(-8,0), (-6,2), (-4,0), (-2,2), (0,0)}
        \\fill \\p circle (2pt);
\\end{tikzpicture}
\\end{center}

\\textbf{ნაბიჯი 3 — ჯამი:}

$[-8,0]$ ინტერვალზე ნაბიჯი 2-ის ტალღა; $[0,8]$-ზე ნაბიჯი 1-ის ტალღა;
$x=0$-ზე — $0$ (ორივე ტალღა ამ წერტილში ნულია).

\\begin{center}
\\begin{tikzpicture}[scale=0.7, >=stealth]
    \\draw[->, thick] (-10,0) -- (10,0) node[right] {$x$};
    \\draw[->, thick] (0,-1) -- (0,4.5) node[above] {$u$};
    \\draw[dashed, thin] (2,0) -- (2,2) -- (0,2);
    \\draw[dashed, thin] (6,0) -- (6,2) -- (0,2);
    \\draw[dashed, thin] (-2,0) -- (-2,2) -- (0,2);
    \\draw[dashed, thin] (-6,0) -- (-6,2) -- (0,2);
    \\draw[very thick] (-8,0) -- (-6,2) -- (-4,0) -- (-2,2) -- (0,0) -- (2,2) -- (4,0) -- (6,2) -- (8,0);
    \\node[below left] at (0,0) {$0$};
    \\node[below] at (2,0) {$2$};
    \\node[below] at (4,0) {$4$};
    \\node[below] at (6,0) {$6$};
    \\node[below] at (8,0) {$8$};
    \\node[below] at (-2,0) {$-2$};
    \\node[below] at (-4,0) {$-4$};
    \\node[below] at (-6,0) {$-6$};
    \\node[below] at (-8,0) {$-8$};
    \\node[above left] at (0,2) {$2$};
    \\foreach \\p in {(-8,0), (-6,2), (-4,0), (-2,2), (0,0), (2,2), (4,0), (6,2), (8,0)}
        \\fill \\p circle (2pt);
\\end{tikzpicture}
\\end{center}

\\textit{შენიშვნა: ბილეთი 6 — ბილეთი 3-ის, ბილეთი 7 — ბილეთი 5-ის ანალოგია.}
\\end{solution}


\\section{თეორიული საკითხების განახლებული სტრუქტურა}

\\textbf{შენიშვნა:} 2026 წლის საგამოცდო ბილეთებში განხორციელდა თეორიული მასალის რესტრუქტურიზაცია. კერძოდ, ნახევრად უსასრულო სიმის ამოცანა გაიყო ორ დამოუკიდებელ საკითხად, რის შედეგადაც ჩამოყალიბდა მარტო შემდეგი სამი ძირითადი თეორიული ნაწილი:

\\begin{enumerate}
    \\item უსასრულო სიმის თავისუფალი რხევა;
    \\item ნახევრად უსასრულო სიმის თავისუფალი რხევა თავისუფალი ბოლოთი ($u_x(0,t)=0$);
    \\item ნახევრად უსასრულო სიმის თავისუფალი რხევა ფიქსირებული (დაბმული) ბოლოთი ($u(0,t)=0$).
\\end{enumerate}


\\subsection{ უსასრულო სიმის თავისუფალი განივი რხევა. და\\-ლამ\\-ბე\\-რის მეთოდი}
\\centerline{\\textbf{}}

\\vspace{0.5em}
\\textbf{I. ამოცანის ფორმულირება}

უსასრულო სიმის თავისუფალი რხევის განტოლება:
\\begin{equation*}
    u_{tt}(x,t) - a^2 u_{xx}(x,t) = 0, \\quad -\\infty < x < \\infty, \\quad t \\ge 0
\\end{equation*}

საწყისი (კოშის) პირობები:
\\begin{equation*}
    u(x,0) = \\varphi(x), \\quad u_t(x,0) = \\psi(x)
\\end{equation*}

\\vspace{1em}
\\textbf{II. ზოგადი ამონახსნის მიღება (დალამბერის მეთოდი)}

მახასიათებელი განტოლება:
\\begin{equation*}
    (dx)^2 - a^2 (dt)^2 = 0 \\implies dx - adt = 0, \\quad dx + adt = 0
\\end{equation*}

მახასიათებელი წირები:
\\begin{equation*}
    x - at = C_1, \\quad x + at = C_2
\\end{equation*}

შემოვიღოთ ახალი (მახასიათებელი) ცვლადები:
\\begin{equation*}
    \\xi = x + at, \\quad \\eta = x - at
\\end{equation*}

განტოლების კანონიკური სახე ახალ ცვლადებში:
\\begin{equation*}
    u_{\\xi\\eta} = 0
\\end{equation*}

ამ განტოლების ინტეგრებით მიიღება ზოგადი ამონახსნი:
\\begin{equation*}
    u(\\xi,\\eta) = f(\\xi) + g(\\eta)
\\end{equation*}

ძველ ცვლადებში ზოგადი ამონახსნია:
\\begin{equation*}
    u(x,t) = f(x+at) + g(x-at)
\\end{equation*}

\\vspace{1em}
\\textbf{III. დალამბერის ფორმულის გამოყვანა}

ზოგადი ამონახსნის შეტანით საწყის პირობებში მივიღებთ:
\\begin{equation*}
    \\begin{cases}
        u(x,0) = f(x) + g(x) = \\varphi(x) \\\\
        u_t(x,0) = af'(x) - ag'(x) = \\psi(x)
    \\end{cases}
\\end{equation*}

მეორე განტოლების ინტეგრებით $[x_0, x]$ შუალედზე გვექნება:
\\begin{equation*}
    f(x) - g(x) = \\frac{1}{a} \\int_{x_0}^x \\psi(\\tau) d\\tau + C
\\end{equation*}

მიღებული განტოლებათა სისტემის ამოხსნით ვპოულობთ $f(x)$ და $g(x)$ ფუნქციებს:
\\begin{equation*}
    f(x) = \\frac{1}{2}\\varphi(x) + \\frac{1}{2a} \\int_{x_0}^x \\psi(\\tau) d\\tau + \\frac{C}{2}
\\end{equation*}
\\begin{equation*}
    g(x) = \\frac{1}{2}\\varphi(x) - \\frac{1}{2a} \\int_{x_0}^x \\psi(\\tau) d\\tau - \\frac{C}{2}
\\end{equation*}

ნაპოვნი ფუნქციების ჩასმით ზოგად ამონახსნში მიიღება:
\\begin{equation*}
    u(x,t) = \\frac{1}{2} \\left[ \\varphi(x+at) + \\varphi(x-at) \\right] + \\frac{1}{2a} \\left( \\int_{x_0}^{x+at} \\psi(\\tau) d\\tau - \\int_{x_0}^{x-at} \\psi(\\tau) d\\tau \\right)
\\end{equation*}

ინტეგრალის თვისების გამოყენებით, საბოლოოდ მივიღებთ დალამბერის ფორმულას:
\\begin{equation*}
    u(x,t) = \\frac{1}{2} \\left[ \\varphi(x+at) + \\varphi(x-at) \\right] + \\frac{1}{2a} \\int_{x-at}^{x+at} \\psi(\\tau) d\\tau
\\end{equation*}

\\newpage





\\subsection{ ნახევრადუსასრულო სიმის თავისუფალი რხევა}
\\centerline{\\textbf{}}

\\vspace{0.5em}




\\textbf{ამოცანის ფორმულირება:}
განვიხილოთ ტალღის განტოლება:
\\begin{equation}
u_{tt}(x,t) - a^2u_{xx}(x,t) = 0, \\qquad 0 \\leq x < \\infty, \\quad t \\geq 0
\\end{equation}
საწყისი პირობებით:
\\begin{equation}
u(x,0) = \\varphi(x), \\qquad u_t(x,0) = \\psi(x)
\\end{equation}
და ერთ-ერთი სასაზღვრო პირობით:
\\begin{align}
u(0,t) &= \\mu(t), && t>0 && \\text{(ბოლო მართვადია)} \\\\
u(0,t) &= 0, && t>0 && \\text{(ბოლო დაბმულია)} \\\\
u_x(0,t) &= 0, && t>0 && \\text{(ბოლო თავისუფალია)}
\\end{align}

\\textbf{ლემა 1:} თუ $\\varphi(x)$ და $\\psi(x)$ კენტი ფუნქციებია სათავის ($x=0$) მიმართ, მაშინ ამონახსნი $x=0$ წერტილში ნულის ტოლია ($u(0,t)=0$). \\\\
\\textbf{დამტკიცება:} კენტობის განმარტებით $\\varphi(-x)=-\\varphi(x)$ და $\\psi(-x)=-\\psi(x)$. დალამბერის ფორმულის თანახმად:
\\[ u(0,t) = \\frac{1}{2}[\\varphi(at)+\\varphi(-at)]+\\frac{1}{2a}\\int_{-at}^{at}\\psi(\\xi)d\\xi = \\frac{1}{2}[\\varphi(at)-\\varphi(at)] + 0 = 0 \\]

\\textbf{ლემა 2:} თუ $\\varphi(x)$ და $\\psi(x)$ ლუწი ფუნქციებია სათავის ($x=0$) მიმართ, მაშინ ამონახსნის წარმოებული $x$ არგუმენტით $x=0$ წერტილში ნულის ტოლია ($u_x(0,t)=0$). \\\\
\\textbf{დამტკიცება:} ლუწობის გამო $\\varphi(-x)=\\varphi(x) \\implies \\varphi'(-x)=-\\varphi'(x)$ (წარმოებული კენტია) და $\\psi(-x)=\\psi(x)$. 
\\[ u_x(0,t) = \\frac{1}{2}[\\varphi'(at)+\\varphi'(-at)]+\\frac{1}{2a}[\\psi(at)-\\psi(-at)] = \\frac{1}{2}[\\varphi'(at)-\\varphi'(at)] + 0 = 0 \\]

\\vspace{1em}

\\textbf{1. ამოცანა დაბმული ბოლოთი ($u(0,t)=0$):} \\\\
საწყის მონაცემებს ვაგრძელებთ მთელ რიცხვთა ღერძზე კენტად:
\\[ \\Phi(x) = \\begin{cases} \\varphi(x), & x > 0 \\\\ -\\varphi(-x), & x < 0 \\end{cases}, \\qquad \\Psi(x) = \\begin{cases} \\psi(x), & x > 0 \\\\ -\\psi(-x), & x < 0 \\end{cases} \\]
დალამბერის ფორმულისა და ლემა 1-ის გამოყენებით, შემდგომი ინტეგრებისა და გამარტივების შედეგად, საწყისი ამოცანის ამონახსნს ექნება სახე:
\\begin{equation}
u(x,t) = \\begin{cases}
\\frac{1}{2}[\\varphi(x+at)+\\varphi(x-at)]+\\frac{1}{2a}\\int\\limits_{x-at}^{x+at}\\psi(\\xi)d\\xi, & t<\\frac{x}{a},x>0 \\\\
\\frac{1}{2}[\\varphi(x+at)-\\varphi(at-x)]+\\frac{1}{2a}\\int\\limits_{at-x}^{x+at}\\psi(\\xi)d\\xi, & t > \\frac{x}{a},x>0
\\end{cases}
\\end{equation}

\\textbf{2. ამოცანა თავისუფალი ბოლოთი ($u_x(0,t)=0$):} \\\\
საწყის მონაცემებს ვაგრძელებთ მთელ რიცხვთა ღერძზე ლუწად:
\\[ \\Phi(x) = \\begin{cases} \\varphi(x), & x > 0 \\\\ \\varphi(-x), & x < 0 \\end{cases}, \\qquad \\Psi(x) = \\begin{cases} \\psi(x), & x > 0 \\\\ \\psi(-x), & x < 0 \\end{cases} \\]
დალამბერის ფორმულისა და ლემა 2-ის გამოყენებით, შემდგომი ინტეგრებისა და გამარტივების შედეგად, საწყისი ამოცანის ამონახსნს ექნება სახე:
\\begin{equation}
u(x,t) = \\begin{cases}
\\frac{1}{2}[\\varphi(x+at)+\\varphi(x-at)]+\\frac{1}{2a}\\int\\limits_{x-at}^{x+at}\\psi(\\xi)d\\xi, & t<\\frac{x}{a},x>0 \\\\
\\frac{1}{2}[\\varphi(x+at)+\\varphi(at-x)]+\\frac{1}{2a} \\left( \\int\\limits_{0}^{x+at}\\psi(\\xi)d\\xi + \\int\\limits_{0}^{at-x}\\psi(\\xi)d\\xi \\right), & t>\\frac{x}{a},x>0
\\end{cases}
\\end{equation}


\\newpage
\\section{ბილეთები}
\\subsection{ბილეთი № 1}

\\begin{enumerate}
    \\item კოშის ამოცანა უსასრულო სიმის თავისუფალი განივი რხევის გან\\-ტოლ\\-ები\\-სა\\-თვის: ფორმულირება (2 ქ.), ზოგადი ამონახსნის მიღება (3ქ.), და\\-ლამ\\-ბე\\-რის ფორმულა (გამოყვანით 5ქ.);
    
    \\item გამოთვალეთ $\\frac{\\partial^2 f}{\\partial x \\partial z}$ და $\\frac{\\partial^2 f}{\\partial y^2}$ თუ ფუნქცია $f(x,y,z) = \\frac{1}{\\sqrt{x^2+y^2+z^2}}$
    
    \\item განსაზღვრეთ
    
    $$2 u_{xx} u_{xxy} - \\frac{\\partial}{\\partial y}(u_{xx} - u_y)^2 - 2 u_{xxy} u_y + u_x - 27x = 12y$$
    
    ა. განტოლების რიგი (1 ქ.); \\\\ბ. გამოყავით მისი მთავარი ნაწილი (2 ქ.); \\\\გ. ამოწერეთ თავისუფალი წევრი (1 ქ.); \\\\დ. განსაზღვრეთ განტოლება წრფივია თუ არაწრფივი (1 ქ.);
    
    \\item მოცემული
    $$x u_{xx} + y u_{yy} = 0$$
    განტოლებისათვის:
    \\\\ა. დაადგინეთ და დაშტრიხეთ სიბრტყის ის არეები სადაც მოცემული გან\\-ტო\\-ლე\\-ბის ტიპი არ იცვლება (2 ქ.); \\\\ბ. იპოვეთ "ცვლადთა კანონიკური გარდაქმნა", როდესაც $x<0$ და $y>0$ (მესამე კვადრანტში) (2 ქ.), როგორი იქნება ამ არეში მთავარი ნაწილის კანონიკური სახე (1 ქ.);
    
    \\item უსასრულო სიმი, რომელიც "OX ღერძის გასწვრივაა", საწყის მო\\-მენტ\\-ში მუქი გრაფიკით გამოსახული $\\varphi(x)$ პროფილი აქვს; 
    
    $u_{tt} - 4u_{xx} = 0, \\quad -\\infty < x < \\infty; \\quad t > 0; \\quad u(0,x) = \\varphi(x) \\text{ და } u_t(0,x) = \\psi(x) = 0;$
    
    \\begin{center}
\\begin{tikzpicture}[scale=0.8]
% Eksenler
\\draw[->] (-5.5,0) -- (6.5,0) node[below] {$x$};
\\draw[->] (0,-0.5) -- (0,5.5) node[left] {$u$};
% Koordinat Etiketleri
\\node[below] at (-4,0) {-4};
\\node[below] at (4,0) {4};
\\node[below right] at (0,0) {O};
\\node[right] at (0,2) {2};
\\node[left] at (0,4) {4};
% Fonksiyon Çizgisi (Ultra Thick ile daha kalın belirginleştirme)
\\draw[ultra thick]
(-5.5,0) -- (-4,0) -- (-2,2) -- (0,0) -- (2,4) -- (4,0) -- (6,0);
% Kesikli İzdüşüm Çizgileri
\\draw[dashed] (-2,2) -- (-2,0);
\\draw[dashed] (-2,2) -- (0,2);
\\draw[dashed] (2,4) -- (2,0);
\\draw[dashed] (2,4) -- (0,4);
% Fonksiyon Tanımı (fi(x))
\\node[above] at (5.5, 0.1) {$\\varphi(x)$};
\\end{tikzpicture}
\\end{center}

    
    ა. რისი ტოლია მაქსიმალური გადახრა (1 ქ)? \\\\
    ბ. "როგორია სიმის ფორმა"  $t = 3$ დროის მომენტებში (4 ქ)?
\\end{enumerate}

\\newpage

% ---------------------------------------------------------
% ბილეთი № 2
% ---------------------------------------------------------
\\subsection{ბილეთი № 2}

\\begin{enumerate}
    \\item ფურიეს მეთოდი (ცვლადთა განცალება) სიმის თავისუფალი რხევის განტო\\-ლე\\-ბი\\-სა\\-თვის დასმული შერეული ამოცანისათვის (საწყის-სასა\\-ზღ\\-ვ\\-რო ამო\\-ცა\\-ნა): ფორმულირება (2 ქ.), შტურმ-ლიუვილის სპექტრა\\-ლუ\\-რი ამოცანა (4ქ.), ამო\\-ნახ\\-ს\\-ნის მწკრივის სახით წარმოდგენა (4ქ);
    
    \\item გამოთვალეთ $\\frac{\\partial^2 f}{\\partial x \\partial y}$ და $\\frac{\\partial^2 f}{\\partial x^2}$ თუ ფუნქცია $f(x,y) = \\frac{1}{\\sqrt{x^2+y^2}}$
    
    \\item განსაზღვრეთ
    
    $$\\frac{\\partial}{\\partial x}(u_{yy}^2 - u) - 2u_{yy} \\frac{\\partial}{\\partial y}(u_{xy} - u_x) - 2u_x + 2 = f(x,y)$$
    
    ა. განტოლების რიგი (1 ქ.); \\\\ბ. გამოყავით მისი მთავარი ნაწილი (2 ქ.); \\\\გ. ამოწერეთ თავისუფალი წევრი (1 ქ.); \\\\დ. განსაზღვრეთ განტოლება წრფივია თუ არაწრფივი (1 ქ.);
    
    \\item მოცემული
    $$\\text{sign}(y) u_{xx} + 2u_{xy} + u_{yy} = 0$$
    განტოლებისათვის:
    \\\\ა. დაადგინეთ და დაშტრიხეთ სიბრტყის ის არეები სადაც მოცემული გან\\-ტო\\-ლე\\-ბის ტიპი არ იცვლება (2 ქ.); \\\\ბ. იპოვეთ "ცვლადთა კანონიკური გარდაქმნა" როდესაც $y<0$ (ქვედა ნახევარსიბრტყეში) (2 ქ.), როგორი იქნება ამ არეში მთავარი ნაწილის კანონიკური სახე (1 ქ.);
    
    \\item ნახევრადაუსასრულო სიმი, რომელიც "OX ღერძის გასწვრივაა", საწყის მომენტში მუქი გრაფიკით გამოსახული $\\varphi(x)$ პროფილი აქვს და მისი ბოლო $O$ დაბმულია;
    
    $u_{tt} - 4u_{xx} = 0, \\quad 0 < x < \\infty; \\quad t > 0; \\quad u(0,x) = \\varphi(x) \\text{ და } u_t(0,x) = \\psi(x) = 0;$
    
    \\begin{center}
\\begin{tikzpicture}[scale=0.7]

    % Oxlar (Eksenler)
    \\draw[->] (-0.5,0) -- (16.5,0) node[below] {$x$}; 
    \\draw[->] (0,-0.5) -- (0,5.5) node[left] {$u$}; 

    % Koordinat Etiketləri
    \\node[below left] at (0,0) {$O$};
    \\node[below] at (2,0) {$2$};
    \\node[below] at (6,0) {$6$};
    \\node[below] at (10,0) {$10$};
    \\node[below] at (14,0) {$14$};
    \\node[left] at (0,4) {$4$};

    % Funksiya Xətti (İki "təpə"li profil)
    \\draw[ultra thick] 
        (0,0) -- (2,0) -- (4,4) -- (6,0) -- (10,0) -- (12,4) -- (14,0) -- (16,0);

    % Kəsikli İzdüşüm Xətləri (Təpə nöqtələrindən)
    \\draw[dashed] (4,4) -- (4,0);
    \\draw[dashed] (4,4) -- (0,4);
    \\draw[dashed] (12,4) -- (12,0);
    \\draw[dashed] (12,4) -- (0,4);

    % Funksiya İşarəsi
    \\node[above] at (15.5, 0.2) {$\\varphi(x)$};

\\end{tikzpicture}
\\end{center}

    
    ა. როგორ ამოვხსნათ დასმული ამოცანა დალამბერის მეთოდით (3 ქ)? \\\\
    ბ. რისი ტოლია მაქსიმალური გადახრა და რამდენჯერ მოხდება ეს (2 ქ)?
\\end{enumerate}

\\newpage





\\subsection{ბილეთი № 3}

\\begin{enumerate}
    \\item კოშის ამოცანა უსასრულო სიმის თავისუფალი განივი რხევის განტო\\-ლე\\-ბი\\-სა\\-თვის: ფორმულირება (2 ქ.), ზოგადი ამონახსნის მიღება (3ქ.), დალამ\\-ბე\\-რის ფორ\\-მუ\\-ლა (გამოყვანით 5ქ.);
    
    \\item გამოთვალეთ $\\frac{\\partial^2 f}{\\partial x \\partial y}$ და $\\frac{\\partial^2 f}{\\partial z^2}$ თუ ფუნქცია $f(x,y,z) = \\frac{1}{\\sqrt{x^2+y^2+z^2}}$
    
    \\item განსაზღვრეთ
    $$\\frac{\\partial}{\\partial y}(y u_y+ u_x^2) - 2u_x u_{xy} + u_x - 6u = 0$$
    
    ა. განტოლების რიგი (1 ქ.); \\\\ბ. გამოყავით მისი მთავარი ნაწილი (2 ქ.); \\\\გ. ამოწერეთ თავისუფალი წევრი (1 ქ.); \\\\დ. განსაზღვრეთ განტოლება წრფივია თუ არაწრფივი (1 ქ.);
    
    \\item მოცემული
    $$u_{xx} + u_{yy} = 0$$
    განტოლებისათვის:
    \\\\ა. დაადგინეთ და დაშტრიხეთ სიბრტყის ის არეები სადაც მოცემული განტო\\-ლე\\-ბის ტიპი არ იცვლება (2 ქ.); \\\\ბ. იპოვეთ "ცვლადთა კანონიკური გარდაქმნა" როდესაც $x<0$ (2 ქ.), როგორი იქნება ამ არეში მთავარი ნაწილის კანონიკური სახე (1 ქ.);
    
    \\item ნახევრადაუსასრულო სიმს, რომელიც "OX ღერძის გასწვრივაა", საწყის მომენტში მუქი გრაფიკით გამოსახული $\\varphi(x)$ პროფილი აქვს და მისი ბოლო $O$ თავისუფალია;
    
    $u_{tt} - 4u_{xx} = 0, \\quad 0 < x < \\infty;\\quad t > 0; \\quad u(0,x) = \\varphi(x) \\text{ და } u_t(0,x) = \\psi(x) = 0;$
    
    \\begin{center}
\\begin{tikzpicture}[scale=0.7]

    % Oxlar (Eksenler)
    \\draw[->] (-0.5,0) -- (16.5,0) node[below] {$x$}; 
    \\draw[->] (0,-0.5) -- (0,5.5) node[left] {$u$}; 

    % Koordinat Etiketləri
    \\node[below left] at (0,0) {$O$};
    \\node[below] at (2,0) {$2$};
    \\node[below] at (6,0) {$6$};
    \\node[below] at (10,0) {$10$};
    \\node[below] at (14,0) {$14$};
    \\node[left] at (0,4) {$4$};

    % Funksiya Xətti (İki "təpə"li profil)
    % (0,0)-dan (2,0)-a qədər sıfır, sonra ilk təpə, sonra ara boşluq, sonra ikinci təpə
    \\draw[ultra thick] 
        (0,0) -- (2,0) -- (4,4) -- (6,0) -- (10,0) -- (12,4) -- (14,0) -- (16,0);

    % Kəsikli İzdüşüm Xətləri (Təpə nöqtələrindən eksenlərə)
    \\draw[dashed] (4,4) -- (4,0);   % Birinci təpədən aşağı
    \\draw[dashed] (4,4) -- (0,4);   % Birinci təpədən sola (u oxuna)
    \\draw[dashed] (12,4) -- (12,0); % İkinci təpədən aşağı
    \\draw[dashed] (12,4) -- (0,4);  % İkinci təpədən sola (u oxuna)

    % Funksiya İşarəsi
    \\node[above] at (15.5, 0.2) {$\\varphi(x)$};

\\end{tikzpicture}
\\end{center}

    
    ა. როგორ ამოვხსნათ დასმული ამოცანა დალამბერის მეთოდით (3 ქ)? \\\\
    ბ. რისი ტოლია მაქსიმალური გადახრა (2 ქ)?
\\end{enumerate}

\\newpage

% ---------------------------------------------------------
% ბილეთი № 4
% ---------------------------------------------------------
\\subsection{ბილეთი № 4}

\\begin{enumerate}
    \\item ფურიეს მეთოდი (ცვლადთა განცალება) სიმის თავისუფალი რხევის განტო\\-ლე\\-ბი\\-სა\\-თვის დასმული შერეული ამოცანისათვის (საწყის-სასა\\-ზღ\\-ვ\\-რო ამო\\-ცა\\-ნა): ფორმუ\\-ლი\\-რე\\-ბა (2 ქ.), შტურმ-ლიუვილის სპექტრა\\-ლუ\\-რი ამოცანა (4ქ.), ამო\\-ნახ\\-ს\\-ნის მწკრივის სახით წარმოდგენა (4ქ);
    
    \\item გამოთვალეთ $\\frac{\\partial^2 f}{\\partial x \\partial z}$ და $\\frac{\\partial^2 f}{\\partial y^2}$ თუ ფუნქცია $f(x,y,z) = \\frac{1}{\\sqrt{x^2+y^2}} + z^2$
    
    \\item განსაზღვრეთ
    $$u_{xx}^2 + u_{yy}^2 - (u_{xx} - u_{yy})^2 - 5xy = \\mathop{\\mathrm{tg}}(xy^2)$$
    
    ა. განტოლების რიგი (1 ქ.); \\\\ბ. გამოყავით მისი მთავარი ნაწილი (2 ქ.); \\\\გ. ამოწერეთ თავისუფალი წევრი (1 ქ.); \\\\დ. განსაზღვრეთ განტოლება წრფივია, კვაზიწრფივი თუ არაწრფივი (1 ქ.);
    
    \\item მოცემული
    
    $$y u_{xx} + x u_{yy} = 0$$
    განტოლებისათვის:
    \\\\ა. დაადგინეთ და დაშტრიხეთ სიბრტყის ის არეები სადაც მოცემული განტო\\-ლე\\-ბის ტიპი არ იცვლება (2 ქ.); \\\\ბ. იპოვეთ "ცვლადთა კანონიკური გარდაქმნა" როდესაც $x<0$ და $y>0$ (მესამე კვადრანტში) (2 ქ.), როგორი იქნება ამ არეში მთავარი ნაწილის კანონიკური სახე (1 ქ.);
    
    \\item უსასრულო სიმი, რომელიც "OX ღერძის გასწვრივაა", საწყის მო\\-მენტ\\-ში მუქი გრაფიკით გამოსახული $\\varphi(x)$ პროფილი აქვს;
    
    $u_{tt} - 4u_{xx} = 0, \\quad -\\infty < x < \\infty; \\quad t > 0; \\quad u(0,x) = \\varphi(x) \\text{ და } u_t(0,x) = \\psi(x) = 0;$
    
    \\begin{center}
\\begin{tikzpicture}[scale=0.6]

    % Oxlar (Eksenler)
    \\draw[->] (-10.5,0) -- (10.5,0) node[below] {$x$}; 
    \\draw[->] (0,-3) -- (0,3.5) node[left] {$u$}; 

    % Koordinat Etiketləri
    \\node[below left] at (0,0) {$O$};
    \\node[above] at (-8,0) {$-8$};
    \\node[above] at (-4,0) {$-4$};
    \\node[below] at (4,0) {$4$};
    \\node[below] at (8,0) {$8$};
    
    \\node[left] at (0,2) {$2$};
    \\node[right] at (0,-2) {$-2$};

    % Funksiya Xətti (Solda mənfi, sağda müsbət təpə)
    \\draw[ultra thick] 
        (-10,0) -- (-8,0) -- (-6,-2) -- (-4,0) -- (4,0) -- (6,2) -- (8,0) -- (10,0);

    % Kəsikli İzdüşüm Xətləri
    \\draw[dashed] (-6,-2) -- (-6,0);
    \\draw[dashed] (-6,-2) -- (0,-2);
    \\draw[dashed] (6,2) -- (6,0);
    \\draw[dashed] (6,2) -- (0,2);

    % Funksiya İşarəsi
    \\node[above] at (9.5, 0.2) {$\\varphi(x)$};

\\end{tikzpicture}
\\end{center}

    
    ა. როგორი იქნება მისი მაქსიმალური (1 ქ)?
    \\\\ბ. "როგორია სიმის ფორმა" $t = 3$ დროის მომენტებში (4 ქ)?
\\end{enumerate}

\\newpage

% ---------------------------------------------------------
% ბილეთი № 5
% ---------------------------------------------------------
\\subsection{ბილეთი № 5}

\\begin{enumerate}
    \\item კოშის ამოცანა უსასრულო სიმის თავისუფალი განივი რხევის გან\\-ტო\\-ლე\\-ბი\\-სა\\-თვის: ფორმულირება (2 ქ.), ზოგადი ამონახსნის მიღება (3ქ.), და\\-ლამ\\-ბე\\-რის ფორმულა (გამოყვანით 5ქ.);
    
    \\item გამოთვალეთ $\\frac{\\partial^2 f}{\\partial x \\partial z}$ და $\\frac{\\partial^2 f}{\\partial y^2}$ თუ ფუნქცია $f(x,y,z) = \\frac{z}{\\sqrt{x^2+y^2}}$
    
    \\item განსაზღვრეთ
    $$\\frac{\\partial}{\\partial y}(y u_y + u_x^2) - 2u_x u_{xy} + u_x - 6u = 18xy$$
    
    ა. განტოლების რიგი (1 ქ.); \\\\ბ. გამოყავით მისი მთავარი ნაწილი (2 ქ.); \\\\გ. ამოწერეთ თავისუფალი წევრი (1 ქ.); \\\\დ. განსაზღვრეთ განტოლება წრფივია, კვაზიწრფივი თუ არაწრფივი (1 ქ.);
    
    \\item $y^2 u_{xx} - x^2u_{yy} = 0$
    
    ა. დაადგინეთ და დაშტრიხეთ სიბრტყის ის არეები სადაც მოცემული გან\\-ტო\\-ლე\\-ბის ტიპი არ იცვლება (2 ქ.); \\\\ბ. იპოვეთ "ცვლადთა კანონიკური გარდაქმნა" როდესაც $x>0$ და $y>0$ (პირველ კვადრანტში) (2 ქ.), როგორი იქნება ამ არეში მთავარი ნაწილის კანონიკური სახე (1 ქ.);
    
    \\item უსასრულო სიმს, რომელიც "OX ღერძის გასწვრივაა", საწყის მო\\-მენტ\\-ში მუქი გრაფიკით გამოსახული $\\varphi(x)$ პროფილი აქვს;
    
    $u_{tt} - 4u_{xx} = 0, \\quad -\\infty < x < \\infty; \\quad t > 0; \\quad u(0,x) = \\varphi(x) \\text{ და } u_t(0,x) = \\psi(x) = 0;$
    
    \\begin{center}
\\begin{tikzpicture}[scale=0.8]

    % Oxlar (Eksenler)
    \\draw[->] (-5.5,0) -- (5.5,0) node[below] {$x$}; 
    \\draw[->] (0,-0.5) -- (0,5.5) node[left] {$u$}; 

    % Koordinat Etiketləri
    \\node[below left] at (0,0) {$O$};
    \\node[below] at (-4,0) {$-4$};
    \\node[below] at (4,0) {$4$};
    \\node[left] at (0,4) {$4$};

    % Funksiya Xətti (Ultra Thick - iki simmetrik təpə)
    \\draw[ultra thick] 
        (-5.5,0) -- (-4,0) -- (-2,4) -- (0,0) -- (2,4) -- (4,0) -- (5.5,0);

    % Kəsikli İzdüşüm Xətləri (Təpə nöqtələrindən)
    \\draw[dashed] (-2,4) -- (-2,0);
    \\draw[dashed] (-2,4) -- (0,4);
    \\draw[dashed] (2,4) -- (2,0);
    \\draw[dashed] (2,4) -- (0,4);

    % Funksiya İşarəsi
    \\node[above] at (5, 0.2) {$\\varphi(x)$};

\\end{tikzpicture}
\\end{center}

    
    ა. რისი ტოლია მაქსიმალური გადახრა (1 ქ)? \\\\
    ბ. "როგორია სიმის ფორმა"  $t = 2$ დროის მომენტებში (4 ქ)?
\\end{enumerate}

\\newpage


% ბილეთი № 6
% ---------------------------------------------------------
\\subsection{ბილეთი № 6}

\\begin{enumerate}
    \\item ფურიეს მეთოდი (ცვლადთა განცალება) სიმის თავისუფალი რ\\-ხე\\-ვის გან\\-ტო\\-ლე\\-ბი\\-სა\\-თვის დასმული შერეული ამოცანისათვის (საწყის-სა\\-სა\\-ზღვ\\-რო ა\\-მო\\-ცა\\-ნა): ფორმულირება (2 ქ.), შტურმ-ლიუვილის სპექ\\-ტ\\-რა\\-ლუ\\-რი ამოცანა (4ქ.), ამონახსნის მწკრივის სახით წარმოდგენა (4ქ);
    
    \\item გამოთვალეთ $\\frac{\\partial^2 f}{\\partial x \\partial z}$ და $\\frac{\\partial^2 f}{\\partial y^2}$ თუ ფუნქცია $f(x,y,z) = \\frac{x}{\\sqrt{x^2+y^2+z^2}}$
    
    \\item განსაზღვრეთ
    
    $$2(u_x - 2u)u_{xy} - \\frac{\\partial (u_x - 2u)^2}{\\partial y} = f(x,y)$$
    
    ა. განტოლების რიგი (1 ქ.); \\\\ბ. გამოყავით მისი მთავარი ნაწილი (2 ქ.); \\\\გ. ამოწერეთ თავისუფალი წევრი (1 ქ.); \\\\დ. განსაზღვრეთ განტოლება წრფივია, კვაზიწრფივი თუ არაწრფივი (1 ქ.);
    
    \\item მოცემული
    $$\\text{sign}(y) u_{xx} + 2u_{xy} + u_{yy} = 0$$
    განტოლებისათვის:\\\\
    ა. დაადგინეთ და დაშტრიხეთ სიბრტყის ის არეები სადაც მოცემული გან\\-ტო\\-ლე\\-ბის ტიპი არ იცვლება (2 ქ.); \\\\ბ. იპოვეთ "ცვლადთა კანონიკური გარდაქმნა" როდესაც $y>0$ (ზედა ნა\\-ხე\\-ვარ\\-სი\\-ბრტ\\-ყე\\-ში) (3 ქ.);
    
    \\item ნახევრადაუსასრულო სიმი, რომელიც "OX ღერძის გასწვრივაა", საწყის მომენტში მუქი გრაფიკით გამოსახული $\\varphi(x)$ პროფილი აქვს და მისი ბოლო $O$ თავისუფალია;
    
    $u_{tt} - 4u_{xx} = 0, \\quad 0 < x < \\infty; \\quad t > 0; \\quad u(0,x) = \\varphi(x) \\text{ და } u_t(0,x) = \\psi(x) = 0;$
    
\\begin{center}
\\begin{tikzpicture}[scale=0.7]

    % Oxlar (Eksenler)
    \\draw[->] (-0.5,0) -- (16.5,0) node[below] {$x$}; 
    \\draw[->] (0,-0.5) -- (0,5.5) node[left] {$u$}; 

    % Koordinat Etiketləri
    \\node[below left] at (0,0) {$O$};
    \\node[below] at (2,0) {$2$};
    \\node[below] at (6,0) {$6$};
    \\node[below] at (10,0) {$10$};
    \\node[below] at (14,0) {$14$};
    \\node[left] at (0,4) {$4$};

    % Funksiya Xətti (İki "təpə"li profil)
    % (0,0)-dan (2,0)-a qədər sıfır, sonra ilk təpə, sonra ara boşluq, sonra ikinci təpə
    \\draw[ultra thick] 
        (0,0) -- (2,0) -- (4,4) -- (6,0) -- (10,0) -- (12,4) -- (14,0) -- (16,0);

    % Kəsikli İzdüşüm Xətləri (Təpə nöqtələrindən eksenlərə)
    \\draw[dashed] (4,4) -- (4,0);   % Birinci təpədən aşağı
    \\draw[dashed] (4,4) -- (0,4);   % Birinci təpədən sola (u oxuna)
    \\draw[dashed] (12,4) -- (12,0); % İkinci təpədən aşağı
    \\draw[dashed] (12,4) -- (0,4);  % İkinci təpədən sola (u oxuna)

    % Funksiya İşarəsi
    \\node[above] at (15.5, 0.2) {$\\varphi(x)$};

\\end{tikzpicture}
\\end{center}

    
    ა. როგორ ამოვხსნათ დასმული ამოცანა დალამბერის მეთოდით (3 ქ)? \\\\
    ბ. რისი ტოლია მაქსიმალური გადახრა (2 ქ)?
\\end{enumerate}

\\newpage

% ---------------------------------------------------------
% ბილეთი # ***
% ---------------------------------------------------------

\\subsection{ბილეთი № 7}
\\begin{enumerate}
    \\item კოშის ამოცანა უსასრულო სიმის თავისუფალი განივი რხევის განტო\\-ლე\\-ბი\\-სა\\-თვის: ფორმულირება (2 ქ.), ზოგადი ამონახსნის მიღება (3ქ.), და\\-ლამ\\-ბე\\-რის ფორმულა (გამოყვანით 5ქ.);
    
    \\item გამოთვალეთ $\\frac{\\partial^2 f}{\\partial x \\partial y}$ და $\\frac{\\partial^2 f}{\\partial x^2}$ თუ ფუნქცია $f(x,y) = \\frac{1}{\\sqrt{x^2+y^2}}$
    
    \\item განსაზღვრეთ 
    $$ \\frac{\\partial}{\\partial y}(y u_y + u_x^2) - 2u_x u_{xy} + u_x - 6u = 0 $$
    ა. განტოლების რიგი (1 ქ.); \\\\ბ. გამოყავით მისი მთავარი ნაწილი (2 ქ.);\\\\ გ. ამოწერეთ თავისუფალი წევრი (1 ქ.); \\\\დ. განსაზღვრეთ განტოლება წრფივია თუ არაწრფივი (1 ქ.);
    
    \\item მოცემული
    $$ y u_{xx} + x u_{yy} = 0 $$
    განტოლებისათვის:\\\\ ა. დაადგინეთ და დაშტრიხეთ სიბრტყის ის არეები სადაც მოცემული გან\\-ტო\\-ლე\\-ბის ტიპი არ იცვლება (2 ქ.); \\\\ბ. იპოვეთ "ცვლადთა კანონიკური გარდაქმნა" როდესაც $x<0$ და $y>0$ (მეორე კვადრანტში) (2 ქ.), როგორი იქნება ამ არეში მთავარი ნაწილის კანონიკური სახე (1 ქ.);
    
    \\item უსასრულო სიმს, რომელიც "OX ღერძის გასწვრივაა", საწყის მო\\-მენტ\\-ში მუქი გრაფიკით გამოსახული $\\varphi(x)$ პროფილი აქვს;
    
    $u_{tt} - 4u_{xx} = 0, \\quad -\\infty < x < \\infty; \\quad t > 0; \\quad u(0,x) = \\varphi(x) \\text{ და } u_t(0,x) = \\psi(x) = 0;$
    
    
    \\begin{center}
\\begin{tikzpicture}[scale=0.8]

    % Oxlar (Eksenler)
    \\draw[->] (-5.5,0) -- (5.5,0) node[below] {$x$}; 
    \\draw[->] (0,-0.5) -- (0,5.5) node[left] {$u$}; 

    % Koordinat Etiketləri (Rəqəmlər)
    \\node[below right] at (0,0) {$O$};
    \\node[below] at (-4,0) {$-4$};
    \\node[below] at (4,0) {$4$};
    \\node[left] at (0,4) {$4$};

    % Funksiya Xətti (Qalın - İki təpəli profil)
    % (0,0)-dan sıfır kimi gəlir, sonra ilk təpə, O-ya dəyir, sonra ikinci təpə, sıfıra enir
    \\draw[ultra thick] 
        (-5.5,0) -- (-4,0) -- (-2,4) -- (0,0) -- (2,4) -- (4,0) -- (5.5,0);

    % Kəsikli İzdüşüm Xətləri (Təpə nöqtələrindən eksenlərə)
    \\draw[dashed] (-2,4) -- (-2,0); % Sol təpədən aşağı
    \\draw[dashed] (-2,4) -- (0,4);  % Sol təpədən u oxuna
    \\draw[dashed] (2,4) -- (2,0);   % Sağ təpədən aşağı
    \\draw[dashed] (2,4) -- (0,4);   % Sağ təpədən u oxuna

    % Funksiya İşarəsi
    \\node[above] at (5, 0.2) {$\\varphi(x)$};

\\end{tikzpicture}
\\end{center}

    ა. რისი ტოლია მაქსიმალური გადახრა (1 ქ)? \\\\
    ბ. "როგორია სიმის ფორმა"  $t = 2$ დროის მომენტებში (4 ქ)?
\\end{enumerate}
\\end{document}
`;
