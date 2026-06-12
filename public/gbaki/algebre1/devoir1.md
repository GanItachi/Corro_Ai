# ENSEA
Année universitaire : 2020-2021

## DEVOIR D'ALGÈBRE 1
Classe : L1 AS Durée : 2H30 min

### Exercice 1 (6 points).

1. Montrer par récurrence que pour tout $n \in \mathbb{N}^*$, le nombre $n^3 + 5n$ est un entier multiple de 6.
2. On note $P$, $Q$, $R$ trois propositions. Expliciter la table de vérité de la proposition
   $$ \text{non}(P \text{ et non}(Q \text{ et } R)) \implies (P \implies (Q \text{ et } R)). $$
3. Montrer par contraposition que l'implication suivante : $x \neq y \implies x^3 + x \neq y^3 + y$ est vraie.

### Exercice 2 (3 points).

Dans l'ensemble $\mathbb{Z}_n$, on définit une loi de composition interne par $a * b = 3a + b$.
1. Est-elle associative ?
2. Existe-t-il un élément neutre ?
3. Est-elle commutative ?

### Exercice 3 (5 points).

(A, +, ·) est un anneau commutatif. On note
$$ B = \{x \in A \mid x^2 = x\}. $$
1. Montrer que si $x \in B$ alors $1 - x \in B$.
2. On définit dans $B$ la loi $\circ$ par
   $$ x \circ y = x + y - 2x \cdot y. $$
Montrer que $(B, \circ, \cdot)$ est un anneau commutatif et unitaire.

### Exercice 4 (6 points).

1. Trouver le PGCD des polynômes
   $$ P(X) = X^4 - X^3 + 5X^2 - 2X + 6 \quad \text{et} \quad Q(X) = X^4 - 4, $$
   puis les factoriser sur $\mathbb{R}$ et $\mathbb{C}$.
2. Trouver une condition nécessaire et suffisante sur $\lambda$ pour que
   $$ P = 2X^3 - X^2 - 7X + \lambda $$
   possède deux racines de somme 1.
3. Considérons le polynôme $P = X^3 - 3X + 2 \in \mathbb{R}[X]$. En utilisant les dérivées successives, montrer que $P$ admet 1 pour racine double.

---

# ENSEA
Année universitaire : 2020-2021

## DEUXIEME DEVOIR D'ALGÈBRE 1
Classe : L1 AS Durée : 2H

### Exercice 1 (5 points).

Soit $f$ l'application linéaire de $\mathbb{R}^4$ dans $\mathbb{R}^4$ définie par :
$$ f(x, y, z, t) = (6x - y + \alpha z - 2t, -15x + y + 3z + 5t, 3z - y + 5z - t). $$
1. Montrer que cette application n'est pas injective.
2. Déterminer les valeurs de $\alpha$ pour lesquelles elle est surjective.
3. Donner une base du noyau de $f$.

### Exercice 2 (8 points).

Soit $G = \{P \in \mathbb{R}_3[X] \mid \int_0^1 x P(x) dx = 0\}$.
1. Montrer que $G$ est un espace vectoriel sur $\mathbb{R}$.
2. Déterminer une base de $G$.
3. On considère l'application $f$ définie sur $G$ par $f(p)(x) = xp'(x) - p(x)$.
   (a) Montrer que $f$ est une application linéaire.
   (b) Montrer que la matrice $M$ de $f$ relativement à la base $B_0$ et à la base canonique de $\mathbb{R}_3[X]$.
   (c) $f$ est-elle bijective ? Justifier votre réponse.
   (d) Déterminer le noyau et l'image de $f$.

### Exercice 3 (7 points).

Décomposer la fraction rationnelle suivante en éléments simples dans $\mathbb{C}$ et puis dans $\mathbb{R}$ :
$$ F(X) = \frac{X}{X^4 + X^2 + 1}. $$