# DEVOIR 1 D'ALGEBRE 1
## Exercice 1 (5 points).
1) Dire si les phrases suivantes sont des propositions ; si c'est le cas, écrire leur négation :
a) $P$ : "toute personne dans cette salle possède un téléphone portable".
b) $Q$ : "Pour tout $x$ dans $\mathbb{R}$, il existe $y$ dans $\mathbb{R}$ tel que $x = 2y$".

2) Parmi les propositions suivantes indiquer si elles sont vraies ou fausses :
a) $(2 < 3)$ et $(2$ divise $5)$
b) $(2 < 3)$ ou $(2$ divise $5)$
c) $(\text{non}(2 < 3))$ ou $(2$ divise $5)$

## Exercice 2 (5 points).
On définit dans $\mathbb{R}^{*}$ la relation $\mathcal{R}$ par :
$\forall x,y \in \mathbb{R}^{*}, \quad x\mathcal{R}y \Longleftrightarrow xy > 0$.

1) Montrer que $\mathcal{R}$ est une relation d'équivalence.

2) Déterminer la classe de $3$ et celle de $-2$.

3) Déterminer l'ensemble quotient $\mathbb{R}^{*} / \mathcal{R}$.

## Exercice 3 (5 points).
On note $A$ l'ensemble des réels suivants :
\[ A = \{m + n\sqrt{6} | m,n \in \mathbb{Z}\}. \]

1) Montrer que $(A, +, .)$ (ensemble $A$ muni de l'addition et la multiplication des réels), est un sous-anneau de $(\mathbb{R}, +, .)$.

2) On considère l'application
\[ f: \begin{array}{rcl} A &\longrightarrow& A \\ m + n\sqrt{6} &\longmapsto& m - n\sqrt{6}. \end{array} \]

Montrer que $f$ est un automorphisme de l'anneau $(A, +, .)$.

## Exercice 4 (5 points).
Soit $P_n = (X + 1)^n - X^n - 1$.

On pose $n \equiv a[6]$ avec $a \in \{0,1,2,3,4,5\}$.

Pour quelles valeurs de $n$, $j = e^{\frac{2i\pi}{3}}$ est-il racine de $P_n$ ?

## ---

# DEVOIR 2 D'ALGEBRE 1

## Exercice 1 (5 points).
On pose $Q_0 = (X - 1)(X - 2)^2, Q_1 = X(X - 2)^2, Q_2 = X(X - 1)$ et
$F = \frac{1}{X(X - 1)(X - 2)^2}$.

1) Décomposer en éléments simples la fraction rationnelle $F$.

2) Trouver les polynômes $A_0, A_1$ et $A_2$ tels que
$A_0 Q_0 + A_1 Q_1 + A_2 Q_2 = 1$.

3) Que peut-on en déduire sur $Q_0, Q_1$ et $Q_2$ ?

## Exercice 2 (5 points).
Soit $Q \in \mathbb{R}[X]$ un polynôme non nul et $F = \{P \in \mathbb{R}[X] | Q \text{ divise } P\}$.

1) Montrer que $F$ est un sous-espace vectoriel de $\mathbb{R}[X]$.

2) Trouver un supplémentaire à $F$.

## Exercice 3 (10 points)
Soit $E = \mathbb{R}_2[X]$ l'espace vectoriel des polynômes à une indéterminée $X$, à coefficients réels et de degré inférieur ou égal à $2$. On donne :
$B_1 = X^2, B_2 = (X - 1)^2, B_3 = (X + 1)^2, C_1 = 1, C_2 = X, C_3 = X^2$.

1. Montrer que $\mathcal{B} = (B_1, B_2, B_3)$ et $\mathcal{C} = (C_1, C_2, C_3)$ sont des bases de $E$.

2. Donner les coordonnées des polynômes suivants dans la base $\mathcal{B}$.
$R = 2X - 1, S = 12, T = 3X^2 - 10X + 1$.

3. On considère l'application $P \mapsto f(P)$ définie dans $E$ par :
$f(P)(X) = P(X - 1) + (X + 1)P'(X)$.

Montrer que $f$ est un endomorphisme de $E$. Donner les matrices :
(i) $Mat_{\mathcal{B}}(f)$ de $f$ en tant qu'endomorphisme de $E$ muni de la base $\mathcal{B}$.
(ii) $Mat_{\mathcal{C},\mathcal{B}}(f)$ en tant qu'application linéaire de $E$ muni de la base $\mathcal{C}$ dans $E$ muni de la base $\mathcal{B}$.