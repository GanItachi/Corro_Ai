## Table des matières

- INTRODUCTION
- 1 Propriétés du corps des nombres réels
  - 1.1 A propos du corps des réelsR.
    - 1.1.1 Notion de corps
    - 1.1.2 L’ordre surR
    - 1.1.3 Propriété de la borne supérieure
  - 1.2 Densité des rationels et irrationnels
  - 1.3 Exercices
- 2 Suites réelles
  - 2.1 Convergence d’une suite
    - 2.1.1 Généralités sur les suites numériques
    - 2.1.2 Suites convergentes ou divergentes
    - 2.1.3 Théorèmes généraux sur les suites convergentes
    - 2.1.4 Valeurs d’adhérence
  - 2.2 Critères de convergence d’une suite
    - 2.2.1 Suites réelles monotomes ou bornées
    - 2.2.2 Critère de Cauchy
  - 2.3 Opérations sur les suites convergentes
  - 2.4 Suites adjacentes
  - 2.5 Suites particulières
    - 2.5.1 Récurrence homographique
    - 2.5.2 Suites récurrentes linéaires
    - 2.5.3 Description des suites récurrentes linéaires
  - 2.6 Exercices
- 3 Limites, continuités et dérivabilités
  - 3.1 Limite et continuité
    - 3.1.1 Généralités
    - 3.1.2 Notion de limite d’une fonction TABLE DES MATIÈRES
    - 3.1.3 Fonction continue
  - 3.2 Fonctions dérivables
    - 3.2.1 Généralité sur les fonctions dérivables
    - 3.2.2 Propriété des fonctions dérivables
  - 3.3 Exercices
- 4 Developpement limité
  - 4.1 Fonctions négligeables
  - 4.2 Fonctions équivalentes
  - 4.3 Développement limité : Définition et propriétés
    - 4.3.1 Développement limité d’ordrenenx
    - 4.3.2 Unicité du Développement limité
  - 4.4 Existence de D.L.-Formules de taylor
  - 4.5 D.L.de quelques fonctions élémentaires
    - 4.5.1 Fonction exponentielle
    - 4.5.2 Fonctions trigonométriques :
    - 4.5.3 Fonctionx7→ln(1 +x):
    - 4.5.4 Fonctionx7→(1 +x)α:
    - 4.5.5 Fonctions hyperboliques :
  - 4.6 Opérations sur les développements limités
  - 4.7 Application des développements limités
  - 4.8 D.L. en±∞
  - 4.9 Etude d’une branche infinie en±∞.
  - 4.10 Exercices

# Chapitre 1

# Propriétés du corps des nombres

# réels

### 1.1 A propos du corps des réelsR.

Les nombres réels forment un ensemble noté parRet muni de deux opérations
internes+ :R×R→Ret·:R×R→R, appelées respectivement, addition et
multiplication, ainsi que d’une relation "<", " plus petit que", le tout satisfaisant à
des propriétés que nous présentons par groupes.

#### 1.1.1 Notion de corps

Soienta,b,cdes éléments deR. Nous admettons que l’addition et la multipli-
cation dansRvérifient les propriétés suivates :

```
( A )a+b=b+aeta·b=b·a(commutativité).
( B )(a+b) +c=a+ (b+c)et(a·b)·c=a·(b·c)(associativité).
( C )a·(b+c) =a·b+a·c(distributivité).
( D ) Il existe deux nombres réels notés 0 et 1 telsa+ 0 =aet 1 ·a=apour tout
élémentadeR.
( E ) Pour toutail existe un nombre réel−atel quea+ (−a) = 0et sia 6 = 0, il
existe un nombre réel 1 /atel quea·(1/a) = 1.
```

Au vu de ces propriétés, on appelleRun corps^1.
Notons que le sous-ensembleQdeR, appelé ensemble des nombres rationnels
et défini par
Q={a/b|a∈Zetb∈Z∗},

1. Un corps est un ensembleAmuni de deux lois de compositions internes (applications de
   A×AdansA) que nous notons encore "+"et "·" vérifiant les propriétés(A)−(E)

**1.1. A PROPOS DU CORPS DES RÉELS** R

oùZ={...,− 3 ,− 2 ,− 1 , 0 , 1 , 2 , 3 ,...}est l’ensemble des entiers relatifs etZ∗=Z\
{ 0 }, muni de l’addition et de la multiplication est aussi un corps. Dans l’ensemble
Qon identifie ab etab××nn pour touta ∈ Zetb,n ∈ Z∗. En identifiant pour tout
a ∈Zles nombresa 1 eta, nous avons les inclusionsN⊂Z ⊂Q ⊂R,oùN=
{ 0 , 1 , 2 , 3 ,...}est l’ensemble des entiers naturels. L’ensembleQ ( R.
En effet, un raisonnement géométrique, certainement déjà connu des babylo-
niens, montre qu’il est possible de construire un carréBde surface double de
celle d’un carré initialAque l’on choisit de côté égal à 1. Si l’on notedla longueur
du côté du carréB, qui est égale à la longueur de la diagonale du carréA, l’égalité
d^2 = 2est alors vérifiée. Mais un tel nombred, ne peut pas être dansQ.

**Proposition 1.1.1** Le nombred=

##### √

2 positif qui vérified^2 = 2, n’est pas un nombre
rationnel.

**Preuve :** Nous allons faire une démonstration par l’absurde. Supposons que

##### √

##### 2

est rationnel. Il existe alors deux entiers positifsa,btels que

##### √

2 = a/b. Siaet
bsont pairs, on peut simplifier la fractiona/bpar 2. En simplifiant par 2 autant
que possible, on arrive au cas où au moins un des deux entiersaoubest impair.
En élevant au carré l’égalité

##### √

2 = a/bet en multipliant les deux membres par
l’entiers naturelb^2 , on arrive à 2 b^2 =a^2. Donca^2 est pair. Siaest impair, on peut
écrirea= 2α+ 1, alorsa^2 = 4α^2 + 4α+ 1qui est impair. On en déduit donc quea
est pair, donc on peut écrirea= 2α, ce qui donne 2 b^2 = 4a^2 et en simplifiant par
2, on obtientb^2 = 2a^2. Le même raisonnement montre alors quebest aussi pair.
On a donc une contradiction avec l’hypothèse queaoubest impair, etp^2 ne peut
pas être rationnel. 2

#### 1.1.2 L’ordre surR

Nous admettons que l’ensemble des nombres réelsRest ordonné par la rela-
tion "<" qui a les propriétés suivantes :

```
( F ) Tout couple(a,b)de réels vérifie exactement une des trois relations sui-
vantesa=b,a < boub < a.
( G ) Sia < betb < calorsa < c(transitivité).
( H ) Sia < b, alorsa+c < b+cpour toutc, et si 0 < calorsac < bc.
```

**Proposition 1.1.2** Rest un corps totalement ordonné^2.

2. On appelle corps ordonné un corpsKmuni d’opérations "+" et "‘·" et d’une relation<telle
   que les relations(F)−(H)soient satisfaits.

**1.1. A PROPOS DU CORPS DES RÉELS** R

**Notation 1.1.3** Pour tout couple de réels(a,b),

```
1.a > bsignifie queb < a
2.a≤bsignifie que l’on a soita < b, soita=b
3.a≥bsignifie que l’on a soita > bsoita=b
4.R+={x∈R|x≥ 0 }
5.R∗=R\{ 0 }
```

L’ensemble des rationnelsQest aussi un corps totalement ordonné. Donc les pro-
priétés que nous avons vu jusqu’ici ne permettent pas de caractériser l’ensemble
R, carQest strictement contenu dansR.
Dans un corps ordonné, on peut introduire la notion de la valeur absolue d’un
nombre.

**Définition 1.1.4** La valeur absolue du nombre réelaest le nombre réel noté|a|et défini
par

```
|a|=
```

##### {

```
a si a≥ 0
−a si a < 0
```

De la définition de la valeur absolue, nous avons immédiatement ce qui suit, pour
tousa,b∈R,

```
1.|a|≥ 0
2.|a|= 0si et seulement sia= 0
3.|−a|=|a|
4.
```

##### ∣∣ 1

```
a
```

##### ∣∣

```
=|^1 a|sia 6 = 0
5.|a·b|=|a||b|
```

6. Soitb > 0 .|a|< bsi et seulement si−b < a < b
7. Soitb≥ 0 .|a|≤bsi et seulement si−b≤a≤b.
   8.|a|≤xpour toutx∈R+si et seulement sia= 0.

**Proposition 1.1.5 (Inégalité triangulaire)** Soienta,b∈R

```
|a+b|≤|a|+|b| (1.1)
```

**Preuve :** Il y a quatre possibilités :

1. Sia≥ 0 etb≥ 0 alorsa+b≥ 0 , de sorte que|a+b|=a+b=|a|+|b|

**1.1. A PROPOS DU CORPS DES RÉELS** R

2. Sia≤ 0 etb≤ 0 alorsa+b≤ 0 et|a+b|=−(a+b) =−a+ (−b) =|a|+|b|.
3. Sia≤ 0 etb≥ 0 alorsa+b=−|a|+|b|de sorte que|a+b|=|−|a|+|b||≤
   |a|+|b|
4. Sia≥ 0 etb≤ 0 alorsa+b=|a|−|b|de sorte que|a+b|=||a|−|b||≤|a|+|b|

**Corollaire 1.1.6** Soienta,b∈R

```
||a|−|b||≤|a+b| (1.2)
```

et
||a|−|b||≤|a−b| (1.3)

**Preuve :** En remplaçant dans (1.1)apara−bnous obtenons|a|≤|a−b|+|b|, de
sorte que
|a|−|b|≤|a−b| (1.4)

Intervertissons les rôles deaetb, nous obtenons

```
|b|−|a|≤|b−a| (1.5)
```

qui est équivalent à dire que

```
|b|−|a|≤|a−b| (1.6)
```

puisque|a−b|=|b−a|. Mais alors puisque

```
||a|−|b||=
```

##### {

```
|a|−|b| si |a|≥|b|
|b|−|a| si |b|≤|a|
```

##### , (1.7)

le résultat découle des inégalités (1.4) et (1.6). En remplaçantbpar−bdans (1.2),
nous obtenons (1.3) 2

Une autre caractéristique importante deRest que l’on ne peut pas donner des
valeurs à deux réels qui se suivent.

**Lemme 1.1.7** Entre deux nombres réelsa < bil y a toujours une infinité de nombres
réels différents

**Preuve :** Nous commençons avec

```
a <a+ 2 b< b
```

En répétant cette construction on obtient une infinité de nombres entreaetb 2

**1.1. A PROPOS DU CORPS DES RÉELS** R

#### 1.1.3 Propriété de la borne supérieure

**Définition 1.1.8** SoitAune partie deR

1. Le réelMest un majorant deAsi pour touta∈Aon aa≤M.On dit queAest
   majorée siAadmet au moins un majorant.
2. Le réelmest un minorant deAsi pour touta∈A, on am≤a. On dit queAest
   minorée siAadmet au moins un minorant.
3. Si la partieAest majorée et minorée alors on dit queAest bornée.
4. On dit qu’un réelmest une borne inférieure deAet on notem= infA, simest
   un minorant deAet si :

```
∀ > 0 ,∃x∈Atel quem≤x≤m+
```

```
(ce qui peut se traduire en disant quemest le plus grand des minorants deA).
```

5. On dit qu’un réelMest une borne supérieure deAet on noteM = supA, siM
   est un majorant deAet si :

```
∀ > 0 ,∃x∈Atel queM− < x≤M
```

```
(ce qui peut se traduire en disant queMest le plus petit des majorants deA).
```

( **I)** Toute partie non vide et majorée deRadmet une borne supérieure. On dit
queRpossède la propriété de la borne supérieure ou est complet.
On admet qu’à un isomorphisme près, il existe un et un seul corps totalement
ordonné possédant la propriété de la borne supérieure, c’est-à-dire vérifiant les
propriétés(A)−(I). En d’autres termes, deux corps ordonnés complets sont iso-
morphes : Il existe une bijection entre les deux corps qui respecte les opérations
algébrique et la relation d’ordre

**Remarque 1.1.9** Toute partieAnon vide et minorée deRadmet une borne inférieure :
en notant(−A)l’ensemble des opposés des éléments deA,infA=−sup(−A).

**Théorème 1.1.10** SiAadmet une borne inférieure (resp. supérieure) cette dernière est
unique.

**Preuve :** Supposons queAadmette deux bornes supérieuresMetM′avecM′<
M. Prenant=M−M′, on peut alors trouverx∈Atel queM′=M− < x≤M,
ce qui contredit l’inégalitéx≤M′. L’ensembleAadmet donc au plus une borne
supérieure. On procède de même pour la borne inférieure. 2

**1.1. A PROPOS DU CORPS DES RÉELS** R

La borne inférieure ou supérieure deAquand elle existe n’est pas nécessaire-
ment un élément deA. Siinf(A)(resp.sup(A)) existe et est dansA, on dit alors que
inf(A)(resp.sup(A)) est le plus petit (resp. plus grand) élément deA. Siinf(A)∈A
(resp.sup(A)∈A) on dit aussi que c’est le minimun (resp. maximun) deAet on
le notemin(A)(resp.max(A)).

**Proposition 1.1.11** 1. L’ensemble des entiers naturelsNadmet un plus petit élément
qui est 0.

2. Toute partie non vide deNadmet un plus petit élément.
3. Toute partie non vide et majorée deNadmet un plus grand élément.
4. Toute partie non vide et minorée deZadmet un plus petit élément, et toute partie
   non vide et majorée, un plus grand élément.

**Définition 1.1.12 (intervalle,segment)** Soienta,bdeux réels tels quea≤b.

1. On note[a,b]l’ensemble des réelsxtels quea≤x≤b. C’est un intervalle fermé.
   On dit aussi que[a,b]est un segment.
2. On note]a,b[l’ensemble des réelsxtels quea < x < b. C’est un intervalle ouvert.
   On définit de même les intervalles mixtes ou semi-ouverts[a,b[et]a,b].On intro-
   duit aussi le symbole∞(appelé l’infini) et on note[a,+∞[l’ensemble desxréels
   tels quea≤xet]−∞,a]l’ensemble des réelsxtels quex≤a

**Exemple 1.1.13** – 1 , 13 , sont des majorants du segmentA= [− 1 ,1]. 1 est un majo-
rant deA= [− 1 ,1[.

- L’intervalle[a,+∞[n’a pas de majorant.

.

**Théorème 1.1.14 (Propriété d’archimède)** Soientxetydeux réels> 0 , alors il existe
un entierntel queny > x.

**Preuve :** Nous faisons la preuve par l’absurde. Si l’affirmation était fausse alorsx
serait un majorant de
S={yn/n∈N}.

Donc, d’après la propriété ( **I** )Spossède une borne supérieure que nous notons
β. Ainsi,yn≤βpour toutn∈N. Or sin∈Nalorsn+ 1∈N. Il vient alors que
(n+ 1)y≤βpour toutn∈Net par conséquentyn≤β−pour toutn∈N. Ainsi
β−est un majorant deS; ce qui est absurde carβ− < βetβest le plus petit
des majorants. 2

La propriété d’Archimède dit qu’en faisant assez de pas de longueuryon
dépassex

### 1.2 Densité des rationels et irrationnels

**Théorème 1.1.15** Pour tout réelxil existe un unique entier rélatifntel que

```
n≤x < n+ 1 (1.8)
```

**Preuve :** Pourxentier relatif, il suffit de prendren =x. On suppose donc que
xn’est pas un entier relatif. Supposons d’abord quexest strictement positif. Le
théoreme 1.1.14 affirme qu’il existem∈N−{ 0 }tel quem > x. Par conséquent,
l’ensemble des entiersm > 0 vérifiantm > xest non vide. Il admet donc un plus
petit élémentp. Il suffit alors de posern=p− 1. Pourx < 0 en raisonnant avec
−xon aboutit à l’existence d’un entierpvérifiantp≤ −x < p+ 1. On a alors
−(p+ 1)< x < p(xn’est pas entier ) etn=−(p+ 1)convient. Si pourxréel il
existe deux entiersnetpvérifiant la relation (1.8), on a alors :
{
n≤x < n+ 1
−p− 1 <−x≤−p

doncn−p < 1 , soitn−p≤ 0 etn−p >− 1 , soitn−p≥ 0. Et nécessairement
n=p. D’où l’unicité denvérifiant (1.8). 2

**Définition 1.1.16** Avec les notations du théorème précédent, l’entiernest appelé la par-
tie entière dex. On le note[x]ouE(x).

### 1.2 Densité des rationels et irrationnels

**Définition 1.2.1** SoitAune partie deR. On dit queAest dense dansRsiArencontre
tout intervalle ouvert]a,b[aveca < b.

**Théorème 1.2.2** L’ensembleQdes nombres rationnels est dense dansR.

**Preuve :** Soienta,b∈Rtels quea < b. Appliquons le théorème 1.1.14 avecx= 1
ety=b−a. Il existe un entier positifqtel queq(b−a)> 1. Il existe aussi un entier
jtel quej > qa. Ceci est evident sia ≤ 0 , et découle du théorème 1.1.14 avec
y= 1etx=aqsia > 0. Soitple plus petit entier qui vérifiep > qa. Nous avons
p− 1 ≤qa, de sorte que nous avonsqa < p≤qa+ 1. Mais puisque 1 < q(b−a)
ceci impliqueqa < p < qa+q(b−a) =qbet par suitea <pq< b. 2

**Théorème 1.2.3** L’ensemble des nombres irrationnels notéR\Qest dense dansR.

### 1.3 Exercices

**Preuve :** Soitiun nombre irrationnel,par exemple

##### √

2. Soientaetbdeux réels tels
   quea < b. On applique le théorème 1.2.2 à]a−i,b−i[, il existe un rationnelrtel
   quea−i < r < b−i. Alorsa < i+r < b. Le nombrex=i+rest irrationnel,
   sinoni=x−rserait rationnel contrairement à l’hypothèse. 2

**Remarque 1.2.4** Il y a beaucoup plus de nombres réels que de nombres rationnels. On
peut montrer que les ensemblesZetQpeuvent etre mis en bijection avecN, c’est-à-dire
que l’on peut numéroter avec les entiers naturels éléments deZetQ. On dit queZetQ
sont dénombrables. Par contreRn’est pas dénombrable ( théorème de cantor ) et pourtant
Qest dense dansR.

### 1.3 Exercices

**Exercice 1** Pour toutx∈R,E(x)désigne la partie entière dex.

1. Montrer clairement que la fonctionEest croissante.
2. Soitn∈N. On veut montrer queE(

##### √

```
4 n+ 2) = E(
```

##### √

```
4 n+ 1).
(a) Montrer par l’absurde qu’il n’existe pas d’entier relatifqtel que(q+ 1)^2 =
4 n+ 2.
(b) On poseq = E(
```

##### √

```
4 n+ 1)etp= E(
```

##### √

```
√^4 n+ 2). Monter que siq < palors
4 n+ 1< q+ 1≤
```

##### √

```
4 n+ 2.
(c) Déduire de tout ce qui précède queq=p.
```

**Correction 1** Pour toutx∈R,E(x)désigne la partie entière dex.

1. Montrons queEest croissante. Soientx,y∈Rtels quex < y. On a par définition
   E(x)≤x < y≤E(y) + 1
   Il vient alors queE(x)etE(y)sont deux entiers naturels qui vérifientE(x) <
   E(y) + 1. DoncE(x)≤E(y). D’où la croissance deE.
2. Soitn∈N. On veut montrer queE(

##### √

```
4 n+ 2) = E(
```

##### √

```
4 n+ 1).
(a) Supposons queq∈Zavec(q+ 1)^2 = 4n+ 2.qétant un entier, est soit pair,
soit impair.
```

- Siqest pair alors il existek∈Ztel queq= 2ket par conséquent(q+1)^2 =
  (2k+ 1)^2 = 4k^2 + 4k+ 1 = 4(k^2 +k) + 1qui est un nombre impair. Or
  4 n+ 2est pair. Par suite, il est impossible d’avoir(q+ 1)^2 = 4n+ 2.
- Siqest impair alors il existek∈Ztel queq= 2k+ 1. Par suite(q+ 1)^2 =
  (2k+ 2)^2 = 4k^2 + 8k+ 4 = 4(k^2 +k+ 2)qui est multiple de 4. Or 4 n+ 2
  est un multiple de 2 qui n’est pas multiple de 4. Par conséquent il est encore
  impossible d’avoir une égalité.

**1.3. EXERCICES**

```
En conclusion, il n’est pas possible de trouver d’entierqtel que(q+ 1)^2 =
4 n+ 2.
(b) On poseq= E(
```

##### √

```
4 n+ 1)etp= E(
```

##### √

```
4 n+ 2). Siq < palorsE(
```

##### √

```
4 n+ 1)<
E(
```

##### √

```
4 n+ 2), c’est à direE(
```

##### √

```
4 n+ 1) + 1≤E(
```

##### √

```
4 n+ 2). Il vient alors de
la définition de partie entière queq ≤
```

##### √

```
4 n+ 1< q+ 1≤E(
```

##### √

```
√^4 n+ 2)≤
4 n+ 2; soit
```

##### √

```
4 n+ 1< q+ 1≤
```

##### √

```
4 n+ 2.
(c) Il vient de ce qui précède que siq < pavecq= E(
```

##### √

```
4 n+ 1)etp= E(
```

##### √

```
4 n+ 2),
alors
```

##### √

```
4 n+ 1< q+ 1≤
```

##### √

```
4 n+ 2, c’est-à-dire 4 n+ 1<(q+ 1)^2 ≤ 4 n+ 2.
Or 4 n+ 1et 4 n+ 2étant deux entiers consécutifs, la seule possibilité est
(q+ 1)^2 = 4n+ 2, ce qui est impossible d’après la question 2a). Doncp≤q.
Or la fonction partie entière est croissante d’après la question 1), et pour tout
entier natureln,
```

##### √

```
4 n+ 1<
```

##### √

```
4 n+ 2. DoncE(
```

##### √

```
4 n+ 1)≤E(
```

##### √

```
4 n+ 2);
c’est-à-dire queq≤p. Il vient alors queq=p.
```

**Exercice 2** Soientxetydes réels, montrer que :

```
1.|x|+|y|≤|x+y|+|x−y|
2.1 +|xy− 1 |≤(1 +|x− 1 |)(1 +|y− 1 |)
```

**Correction 2** 1. On a

```
2 |x|=|(x+y) + (x−y)|≤|x+y|+|x−y|
```

```
et
2 |y|−|(x+y)−(x−y)|≤|x+y|+|x−y|,
en sommant les deux inégalités, on a le double du résultat demandé.
```

2. On a

```
(1 +|x− 1 |)(1 +|y− 1 |) =|x− 1 |+|y− 1 |+|x− 1 ||y− 1 |+ 1.
```

```
Il s’agit donc de prouver que
```

```
|xy− 1 |≤|x− 1 |+|y− 1 |+|x− 1 ||y− 1 |=|x− 1 |+|y− 1 |+|xy−x−y+ 1|
```

```
Ce qui s’écrit|xy− 1 |−|xy−x−y+ 1|≤|x− 1 |+|y− 1 |ou encore|xy− 1 |−
|x+y−xy− 1 | ≤ |x− 1 |+|y− 1 |Or la seconde inégalité triangulaire donne
|a|−|b|≤|a+b|
```

**Exercice 3** Soit la fonctionfdéfinie parf(x) = E(2x)−2E(x), oùE(x)désigne la
partie entière dex.

1. Montrer que la fonctionfest périodique de période 1.

**1.3. EXERCICES**

2. Calculerf(x)pourx∈

##### [

##### 0 ,^12

##### [

```
puis pourx∈
```

##### [ 1

##### 2 ,^1

##### [

. En déduire que

```
∀x∈R, 0 ≤E(2x)−2E(x)≤ 1.
```

**Correction 3** 1. f(x+1) =E(2x+2)− 2 E(x+1) =E(2x)+ 2− 2 E(x)−2 =f(x)
,fest donc 1-périodique.

2. Six∈[0,^12 [, alors 2 x∈[0,1[etf(x) = 0−0 = 0, six∈[^12 ,1[, on a 2 x∈[1,2[et
   f(x) = 1−0 = 1.
   Pourx∈[0,1[, on a donc 0 ≤E(2x)− 2 E(x)≤ 1 , par 1-périodicité, on a

```
∀x∈R, 0 ≤E(2x)− 2 E(x)≤ 1
```

**Exercice 4** 1. Démontrer que sir∈Qetx /∈Qalorsr+x /∈Qet sir 6 = 0alors
rx /∈Q.

2. En déduire : entre deux nombres rationnels il y a toujours un nombre irrationnel.

**Exercice 5** On veut montrer que l’ensembleF={pln 2 +qln 3 : (p,q)∈Z^2 }est dense
dansR.

1. Quand dit-on qu’un sous-ensembleAdeRest dense dansR?
2. Montrer queln 2etln 3sont dansF, et que six∈Falorsmx∈Fpour tout
   m∈Z.
3. Soitα= infF∩R∗+.
   (a) Justifier l’existence deαet montrer que siα∈F∩R∗+alors pour toutx∈F,
   x−αE(xα) = 0
   (b) Montrer queln 2ln 3∈/Q. En déduire queα /∈F∩R∗+.
   (c) Montrer que siα > 0 alorsα∈F∩R∗+. Conclure par rapport àα
4. Déduire de ce qui précède queFest dense dansR

**Correction 5** Montrons queFest dense dansR.

```
1.Aest dense dansRsi et seulement pour touta < bdansR, il existeα∈Atel que
a < α < b.
```

2. Soitx ∈ F il existe(p,q) ∈ Z^2 tel quex = pln 2 +qln 3, par suitemx =
   mpln 2 +mqln 3 =p′ln 2 +q′ln 3avec(p′,q′)∈Z^2. Doncmx∈F.
3. Soitα= infF∩R∗+.

**1.3. EXERCICES**

```
(a) L’ensembleF+=F∩R∗+est une partie deRminorée par 0 donc admet une
borne inférieurα= infF∩R∗+≥ 0.
Par ailleurs, siα∈∈F+, alorsα > 0. Soitx∈Fetk= E(xα). On a
```

```
k≤ x
α
```

```
< k+ 1⇔kα≤x≤kα+α⇔ 0 ≤x−kα < α.
```

```
Orxetkαétant dansF,x−kαl’est aussi. Ce qui veut dire quex−kα= 0
ou bienx−kα∈F+. La deuxième hypothèse contredit l’infimum deα. Donc
x−kα= 0.
(b) Siα∈F∩R∗+alors d’après la question précédente,F=αZ. Si ceci était le
cas, vu queln 2etln 3sont dansF, on auraitln 2 =kαetln 3 =k′α; soit
ln 2
ln 3=
```

```
k
k′rationnel. Ce qui est faut car
```

```
ln 2
ln 3∈/Q. Doncα /∈F∩R∗+
(c) Supposonsα > 0. Siα /∈F+alors il existeraitx∈F+tel queα < x < 2 α.
De même en considérantα < x, il existey∈F+tel queα < y < x. D’où
0 < x−y < α. Or six,y∈F, alorsx−y∈F; ce qui nous amêne à dire que
x−y∈F+, ce qui contredirait le fait queαest la borne inf. En conclusion
α= 0.
```

4. Siα= 0alors pour deux réelsa < b, il existez∈F+tel que 0 < z < b−a; soit
   1 < bz−az. Ceci implique qu’il existe un entier relatifntel queaz < n < bz, soit
   a < nz < b. Ornz∈F. D’où la densité.

.

# Chapitre 2

# Suites réelles

Nous nous interessons dans ce cours aux suites réelles, mais nous donnerons
de temps à autre des résultats élémentaires portant sur les suites complexes.

### 2.1 Convergence d’une suite

#### 2.1.1 Généralités sur les suites numériques

**Définition 2.1.1** On appelle suite réelle (resp.complexe), toute application définie surN
(ou une partie deN) à valeurs dansR( resp.C). On note usuellementu= (un)n∈Nou
u= (un)n≥n 0 ou tout simplement(un)une suite.unest appelé le terme général de la suite
(un).

Pour simplifier, nous supposerons que les suites sont définies surNet on note
RNl’ensemble des suites réelles, (CNl’ensemble des suites complexes).
Le terme généralund’une suite(un)peut être donné sous forme explicite ou
sous forme récurrente ( ce qui signifie que l’on indique une loi de formation des
termes successifs ).

**Exemple 2.1.2** 1. La suite réellee= (en)n≥ 1 définie paren=

##### (

```
1 +n^1
```

```
)n
est sous une
forme explicite. Elle commence pare 1 = 2,e 2 =^94 ,e 3 =^4333 ,etc.
```

2. La suite (de Fibonacci)(vn)n∈Ndéfinie parv 0 = 0,v 1 = 1etvn+2=vn+1+vn, est
   donnée sous une forme récurrente. Elle commence parv 0 = 0,v 1 = 1,v 3 = 2, etc.
3. Plus généralement on a les suites récurrentes linéaires d’ordre 2 définies par la
   formuleun+1=aun+bun− 1 avecu 0 etu 1 données.

**Définition 2.1.3** Une suite réelle(un)n∈Nest dite :

1. majorée s’il existe un réelMtel que pour tout entiern∈Non aitun≤M,

**2.1. CONVERGENCE D’UNE SUITE**

2. minorée s’il existe un réelmtel que pour tout entiern∈Non aitm≤un,
3. bornée si elle est majorée et minorée,
4. non décroissante, ou croissante au sens large ( resp. non croissante, ou décroissante
   au sens large ) si pour toutn∈Non aun+1≥un(resp.un≥un+1),
5. strictement croissante ( resp. strictement décroissante ) si pour toutn∈Non à
   un+1> un(resp.un> un+1),
6. monotome si elle est croissante ou décroissante,
7. périodique s’il existe un entierp∈Ntel que pour toutn∈Non aitun+p=un.
   L’entierpest la période de la suite.
   Une suite complexe(un)est dite bornée si la suite réelle(|un|)est bornée.

**Exemple 2.1.4** La suite de terme générale

```
1.un= sinnest bornée. Elle n’est ni décroissante ni croissante.
2.un=^1 ndéfinie pourn≥ 1 est strictement décroissante et bornée.
3.un=enest croissante, minorée mais pas majorée.
4.un=u 0 anavecu 0 > 0 est croissante non majorée sia > 1 , décroissante et bornée
si 0 < a < 1 , constante sia= 1.
```

5. La suiteun= sin

```
( 2 πn
17
```

##### )

```
est périodique de période 17.
```

**Remarque 2.1.5** 1. Si la suite réelle(un)est une suite croissante à termes stricte-
ment positifs, alors(u^1 n)est une suite décroissante à termes positifs. Dans ce cas en
effet :
un+1> un⇐⇒u^1
n+

```
<u^1
n
```

2. Il peut arriver qu’une suite soit rendue monotome quand on en supprime lesq
   premiers termes (qfixé).
3. D’après sa définition, la monotonie se met en évidence en étudiant le signe deun+1−
   un. Dans le cas oùun> 0 pour toutn∈N, on peut aussi comparer à 1 le quotient
   un+
   un.

#### 2.1.2 Suites convergentes ou divergentes

**Définition 2.1.6** Soit(un)une suite complexe ou réelle. On dit que(un)admeta∈C
pour limite ou que(un)converge versaet on écritn→lim+∞un=a, si pour tout > 0 il

existe unN∈Ntel que|un−a|≤pour toutn≥N. En formule

```
n→lim+∞un=a⇐⇒∀ >^0 ,∃N∈N,(n > N=⇒|un−a|< )
```

**2.1. CONVERGENCE D’UNE SUITE**

**Proposition 2.1.7** La limite d’une suite convergente est unique.

**Preuve :** (Nous faisons la démonstration par l’absurde) Soit(un)une suite. Supposons
qu’il y a deux limites`et`′avec` 6 =`′. Prenons

```
=|`
```

##### ′−`|

##### 4 >^0.

Comme`est la limite de la suite(un)il existe un entierNtel que pourn > Non
ait|un−`|< , de même`′étant aussi limite, il existe un entier N’ tel que pour
toutn > N′on ait|un−`′|< . Alors sin >max(N,N′)l’inégalité triangulaire
permet d’écrire

```
|`−`′|≤|`−un|+|un−`′|≤ 2 =|`
```

##### ′−`|

##### 2

ce qui est absurde. 2

**Exemple 2.1.8** 1. Montrons que la suite(un)de terme généralun = −n^2 +2n+3a pour
limite− 2.
Nous avons

```
|un−(−2)|< ⇐⇒n+ 2^7 < ⇐⇒ n >^7 − 2.
```

```
Donc pour > 0 sin >E
```

##### ( 7

```

```

##### )

```
− 1 >^7 − 2 alors|un−(−2)|< .
```

2. Considérons la suite définie parun=

##### √

n^2 + 1−n. On peut écrireun=√n (^2) +1+^1 n
ce qui montre que|un|< 21 npour toutn∈N∗. Donclimn−→∞un= 0. On peut
remarquer que la suite(un)est décroissante. En utilisant l’inégalité
||a|−|b||≤|a−b|,
qui est valable pour tous réelsaetb, on montre que
nlim−→∞un=`=⇒n−→∞lim |un|=|`|.
**Théorème 2.1.9** Toute suite ( réelle ou complexe ) convergente est bornée.
**Preuve :** Soit(un)n∈Nqui converge vers`∈C. Il existeN ∈Ntel que pour tout
n >N, on ait|un−`|< 1 , c’est-à- dire
|un|=|un−`+`|≤|un−`|+|`|<1 +|`|.
Posons
M= max{|u 0 |,|u 1 |,...,|uN|,|`|+ 1}.
Nous avons pour toutn∈N,|un|≤M. 2

**2.1. CONVERGENCE D’UNE SUITE**

**Définition 2.1.10** Une suite non convergente est dite divergente.

**Exemple 2.1.11** Montrons que la suite(un)définie parun= (−1)nest divergente. Si
cette suite converge vers un réel`la suite|u|= (|(−1)n|)n∈Nqui est constante égale à 1
va converger vers|`|et nécessairement`=± 1. En écrivant que pour= 1, il existe un
entierNtel que :
∀n > N,|(−1)n−`|< 1

et en prenantn > N impair si` = 1et pair si` =− 1 , on aboutit à 2 < 1 qui est
impossible. La suiteuest donc divergente.

Parmi les suites réelles divergentes, on traite à part celles qui tendent vers l’infini.

**Définition 2.1.12** Soit(un)une suite réelle.

1. On dit que(un)tend vers+∞si,

```
∀M∈R+,∃N∈Ntel que∀n > N,un> M.
```

```
On noten→lim+∞un= +∞.
```

2. On dit que(un)tend vers−∞si,

```
∀m∈R+,∃N∈Ntel que∀n > N,un<−m.
```

```
On noten→lim+∞un=−∞.
```

**Exemple 2.1.13** Soit(an)la suite de terme généralan=nnn!. Montrons quen→lim+∞an=

+∞. En effet, nous avons pour toutn∈N∗,

```
an=n
```

```
n
n! =
```

```
n
n
```

```
n
n− 1 ...
```

```
n
2
```

```
n
1 > n.
```

Donc pour toutK > 0 sin > Kalors on aan> K. Prendre pourNtout entier supérieur
àK, en occurenceE(K) + 1.

Une suite qui tend vers+∞est nécessairement positive à partir d’un certain rang.
On peut remarquer quen→lim+∞un =−∞si et seulement silimn−→+∞−un= +∞

Siun = v^1 n avecvn > 0 pour toutn ∈N, alorsn→lim+∞un = 0si, et seulement si,

n→lim+∞vn= +∞
Dans la définition de la convergence et des limites ci-dessus, les inégalités
peuvent être larges ou strictes.
Une suite qui tend vers l’infini (c’est-à-dire vers+∞ou−∞) est non bornée
donc divergente.
Une suite complexe(un)n∈Ntelle quen→lim+∞|un|= +∞est divergente puisque

non bornée.

**2.1. CONVERGENCE D’UNE SUITE**

#### 2.1.3 Théorèmes généraux sur les suites convergentes

**Théorème 2.1.14** Siu= (un)n∈Nest une suite de nombres complexes pour laquelle on
peut trouver une suitev= (vn)n∈Nde réels positifs telle quen→lim+∞vn= 0et|un−`|≤vn

à partir d’un certain rang, où`est un nombre complexe donné, alorsn→lim+∞un=`

**Preuve :** Fixons > 0. Il existeN 0 ∈ Ntel que pour toutn > N 0 ,vn < .
Par ailleurs, il existeN 1 tel que pour toutn > N 1 ,|un−`| ≤vn. Maintemant, si
n >max (N 0 ,N 1 ), alors|un−`|≤vn< . 2

Le résultat qui suit se déduit immédiatement de la définition d’une suite conver-
gente.

**Théorème 2.1.15** Soit(un)n∈Nune suite réelle telle quen→lim+∞un=`.

1. Si` > 0 (resp.` < 0 ) on a alorsun> 0 (resp.un< 0 ) à patir d’un certain rang.
2. Siunest positif (resp. négatif) à partir d’un certain rang, on a alors`≥ 0 (resp.
`≤ 0 )

**Preuve :**

1. Pour=` 2 il existen 0 ∈Ntel que :

```
∀n > n 0 ,|un−`|< 2 `
```

```
soit :
∀n > n 0 ,` 2 < un<^32 `
et donc :
∀n > n 0 , 0 < 2 `< un.
Pour` < 0 , on travaille avec la suite(−un)n∈N.
```

2. Se déduit facilement du premier point.

2

**Théorème 2.1.16 (thèorème de gendarmes)** Soient(un),(vn)et(wn)trois suites réelles.
Si à partir d’un certain rang,vn≤un≤wnet d’autre part(vn)et(wn)admettent la
même limite`, alors(un)converge et admet aussi`pour limite.

**Preuve :** Fixons > 0. La convergente de(vn)vers`implique qu’il existeN∈N
tel que sin > Nalors|vn−`|< , c’est-à-dire

```
`− < vn< `+. (2.1)
```

**2.1. CONVERGENCE D’UNE SUITE**

De même la convergence de(wn)vers`implique qu’il existeN′tel quen > N′
alors|wn−`|< , c’est-à-dire

```
`− < wn< `+. (2.2)
```

Par ailleurs, il existe d’après l’hypothèse,M∈Ntel quen > Malors

```
vn≤un≤wn. (2.3)
```

Donc sin >max(N,N′,M)alors (2.1), (2.2) et (2.3) sont valides. Par suite,

```
`− < vn≤un≤wn< `+.
```

Ce qui prouve que la suite(un)tend vers`. 2

**Remarque 2.1.17** Soient(un)et(vn)deux suites réelles. Si à partir d’un certain rang
on avn≤unet si d’autre part

```
1.n→lim+∞vn= +∞alorsn→lim+∞un= +∞
2.n→lim+∞un=−∞alorsn→lim+∞vn=−∞
```

**Preuve :** D’après l’hypothèse, il existeN 0 ∈Ntel que pour toutn≥N 0 , on ait
vn≤un.

1. Dire quen→lim+∞vn= +∞signifie pourK∈Qdonné, il existe un entierNtel
   que sin > Nalorsvn> K.D’autre part on sait que pour toutn > N 0 , on a
   vn≤un.Donc sin >max(N 0 ,N)on aK < vn≤un, ce qui prouve queun
   tend vers+∞.
2. On fait de même qu’en 1).

2

**Théorème 2.1.18** Soientu= (un)n∈Nune suite réelle ou complexe telle queunsoit non
nul à partir d’un certain rang eta∈R+. Sin→lim+∞

##### ∣∣

```
∣unu+1n
```

##### ∣∣

```
∣=aalorsn→lim+∞n
```

##### √

```
|un|=a
```

**Preuve :** Exercice. 2

#### 2.1.4 Valeurs d’adhérence

**Définition 2.1.19** Soit(un)n∈Nune suite réelle ou complexe.

**2.1. CONVERGENCE D’UNE SUITE**

1. On dit que la suite(vn)est une suite extraite de(un)lorsqu’il existe une application
   φstrictement croissante deNdansNtelle que

```
∀n∈N,vn=uφ(n)
```

```
.
```

2. On dit qu’un scalaireaest valeur d’adhérence de la suite(un)n∈Ns’il est limite
   d’une suite extraire de(un)n∈N.

En pratique, on rencontrera souvent les extractions(un+1)n≥ 0 (suite décalée d’un indice),
(u 2 n)n≥ 0 et(u 2 n+1)n≥ 0 (termes pairs et impairs d’une suite).

**Exemple 2.1.20** La suite de terme généralevn=^1 n+ sin^2 nπ 3 admet les valeurs d’adhé-
rences 0 ,

```
√ 3
2 ,−
```

√ 3 2. Ces nombres sont les limites respectives des suites extraires(v^3 n),
(v 3 n+1)et(v 3 n+2).

**Remarque 2.1.21** Siφest une application strictement croissante deNdansNalors pour
toutn∈N,φ(n)≥n.

**Preuve :** Procédons par récurrence. On aφ(0)≥ 0 puisqueφ(0)∈N. Supposons
queφ(n)≥ n. on aφ(n+ 1)> φ(n)puisqueφeststrictement croissante. Donc
φ(n+ 1)> n, soitφ(n+ 1)≥n+ 1puisqueφ(n+ 1)est un entier. 2

**Théorème 2.1.22** Soit(un)une suite. Alors(un)tend vers`si et seulement si toute
extraire (sous suite) de(un)tend vers`.

**Preuve :** ⇐)C’est évident puisque la sous-suite(vn)obtenue en prenant pourφ
l’identité deNest la suite(un)elle-même.
⇒)Soit(vn)la sous-suite associée à l’applicationφ: N→N. Fixons > 0.
Comme la suite(un)tend vers`, il existe un entierN tel que sin > N alors
|un−`|< . Orn > Nimpliqueφ(n)≥n, d’après la remarque 2.1.21. Donc

```
|vn−`|=
```

##### ∣∣

```
uφ(n)−`
```

##### ∣∣

##### < 

pourn > N, ce qui prouve que(vn)tend vers`. 2

Le théorème ci-dessus nous fait comprendre qu’une suite convergente à exactement
une valeur d’adhérence.

**Corollaire 2.1.23** Si une suite réelle(un)admet deux suites extraires qui tendent vers
deux limites différentes, alors(un)n’admet pas de limite.

### 2.2 Critères de convergence d’une suite

### 2.2 Critères de convergence d’une suite

#### 2.2.1 Suites réelles monotomes ou bornées

**Théorème 2.2.1** 1. Tout suite(un)croissante et majorée, converge verssupun,n∈N.

2. Toute suite(un)croissante non majorée tend vers+∞.
3. Toute suite(vn)décroissante et minorée converge versinfvn,n∈N
4. Toute suite(vn)décroissante et non minorée tend vers−∞.

**Preuve :**

1. La partieAdeRformée desunpourn∈Nest non vide et majorée. Puisque
   Rpossède la propriété de la borne supérieur,supA= `existe. Puisque`
   est un majorant on aun ≤`pour toutn. Soit > 0. Comme`est le plus
   petit majorant le nombre`−n’est pas un majorant deA, donc il existe un
élémentuNdeAtel que`− < uN. Comme(un)est croissante, on aun≥uN
   pourn≥N. On a donc pourn > N,

```
`− < uN≤un≤` < `+
```

```
D’où|un−`|< etn−→lim+∞un=`.
```

2. L’assertion(un)n’est pas majorée s’écrit

```
∀K∈R,∃N∈Ntel queuN> K
```

```
Comme(un)est croissante on a alorsun≥uN> Kpour toutn > N, ce qui
est la définition den−→lim+∞un= +∞
```

3. Procéder comme au ) en prenant l’infimun à la place du supremun.
4. Procéder comme au ) en utilisant la décroissante et la définition duinf.

2

**Théorème 2.2.2** De toute suite réelle(un)n∈Non peut extraire une suite monotone.

**Preuve :** Considérons l’ensemble

```
A={n∈Ntel que∀m > n,um≤un}.
```

SiAest finie, il admet un majorantn 0 ∈/A(prendren 0 = 0si A est vide). Il existe
alors un entiern 1 > n 0 tel queun 1 > un 0.
Commen 1 ∈/A, il existen 2 > n 1 tel queun 2 > un 1 et ainsi de suite,on construit
par récurrence une suite strictement croissante d’entiers(nk)k∈Ntelle queunk+1>

**2.2. CRITÈRES DE CONVERGENCE D’UNE SUITE**

unkpour toutk∈N. La suite(unk)k∈Nest alors extraire de(un)n∈Net strictement
croissante.
SiAest infinie, on peut ranger ses éléments dans l’ordre croissant, soitA=
{nktel quek∈N}avecnk < nk+1pour toutk ∈ Net par construction, on a
unk+1 ≤ unkpour toutk ∈ N. La suite(unk)k∈Nest alors extraite de(un)n∈Net
est décroissante. 2

**Théorème 2.2.3 (Bolzano-Weierstrass)** De toute suite bornée on peut extraire une
sous-suite convergente.

**Preuve :** Résulte immédiatement des deux théorèmes précédents. 2

**Théorème 2.2.4** Une suite réelle(un)n∈Nest convergente si et seulement si elle est bor-
née et n’a qu’une seule valeur d’adhérence.

**Preuve :** On sait déjà qu’une suite convergente est bornée et qu’elle n’a qu’une
seule valeur d’adhérence.
Réciproquement, supposons que la suite bornée(un)n∈Nadmette`pour seule
valeur d’adhérence. Si cette suite ne converge pas vers`, on peut alors trouver un
réel > 0 tel que pour tout entiern, il existep > navec|up−`|≤. Par récurrence
on peut alors construire une suite strictement croissante d’entiers(φ(n))n∈Ntelle
que

##### ∣∣

```
uφ(n)−`
```

##### ∣∣

≥pour toutn. De la suite bornée(uφ(n))n∈N, on peut extraire une
sous suite∣ (uφ(n))n∈Nqui converge vers`′et par passage à la limite dans l’inégalité
∣uφ(n)−`∣∣≥, on en déduit que|`′−`| ≥ > 0 , c’est-à-dire que`′est une valeur

d’adhérence de(un)n∈Ndistincte de`, ce qui contredit l’hypothèse de départ. 2

**Théorème 2.2.5** Une suite réelle est divergente, si et seulement si, elle vérifie l’une des
deux conditions suivantes :

- elle est non bornée,
- elle est bornée et admet au moins deux valeurs d’adhérence

#### 2.2.2 Critère de Cauchy

**Définition 2.2.6** Une suite(un)n∈N(réelle ou complexe) est dite de Cauchy, si

```
nlim−→∞sup
p,q>n
```

```
|up−uq|= 0.
```

Cette dernière condition se reécrit classiquement à l’aide de quantificateurs universels et
existentiels :
∀ > 0 ,∃N∈N,∀p,q > N,|up−uq|< ,

**2.2. CRITÈRES DE CONVERGENCE D’UNE SUITE**

ou encore :
∀ > 0 ,∃N∈N,∀k > 0 ,|un+k−un|< .

**Théorème 2.2.7** Toute suite de Cauchy (réelle ou complexe) est bornée.

**Preuve :** Si(un)n∈Nest une suite de Cauchy, il existe alors un entier natureln 0 ≥ 1
tel que :
∀n > n 0 ,∀m > n 0 ,|um−un|<1;

ce qui entraine que pour toutn > n 0 ,

```
|un| = |un−un 0 +1+un 0 +1|
≤ |un−un 0 +1|+|un 0 +1|<1 +|un 0 +1|.
```

Posons
M= max{|u 0 |,|u 1 |,...,|un 0 |,1 +|un 0 +1|}.

On a|un|≤Mpour toutn∈N, ce qui signifie que la suite(un)n∈Nest bornée. 2

**Théorème 2.2.8** Une suite réelle ou complexe est convergente si et seulement si, elle est
de Cauchy.

**Preuve :** Soit(an)une suite réelle ou complexe.
⇒)Nous supposons que la suite(an)converge versa.
Soit > 0. puisquen→lim+∞an=a, il existen 0 ∈Ntel que pour toutn∈N,

```
n > n 0 ⇒|an−a|< 2. (2.4)
```

Par conséquent,

```
n,m > n 0 =⇒|an−am|=|an−a+a−am|≤|an−a|+|a−am|< .
```

Ce qui montre que la suite est de Cauchy.
⇐)Nous supposons que la suite(an)est de Cauchy.
Elle est bornée d’après le théorème 2.2.7. Donc, admet d’après le théorème de
Bolzano-weierstrass, une sous-suite convergente(aφ(n)). Notonsala limite de la
sous-suite(aφ(n)).
Soit > 0. La suite(an)étant de Cauchy, il existen 0 ∈Ntel que pour tout
n,m∈N
n,m > n 0 ⇒|am−an|<
2

##### . (2.5)

### 2.3 Opérations sur les suites convergentes

par ailleurs la sous-suite(aφ(n))converge versa. Donc il existen 1 ∈Ntel que pour
toutn∈N,
n > n 1 =⇒

##### ∣∣

```
aφ(n)−a
```

##### ∣∣

##### < 2  (2.6)

Sin >max(n 0 ,n 1 ), nous obtenons à partir de (2.5) et (2.6) que

```
|an−a|=
```

##### ∣∣

```
an−aφ(n)+aφ(n)−a
```

##### ∣∣

##### ≤

##### ∣∣

```
an−aφ(n)
```

##### ∣∣

##### +

##### ∣∣

```
aφ(n)−a
```

##### ∣∣

##### < 

d’où le résultat 2

**Exemple 2.2.9** Montrons que, pour tout nombre complexezla suite(un(z))n∈Ndéfinie
parun(z) = Σnk=0zkk!est convergente. La limite de cette suite est l’exponentielle complexe
deznotéeexp(z).
Il suffit de montrer que c’est une suite de Cauchy. en effet, pourm > n > 2 nous
avons

```
|um−un| =
```

##### ∣∣

```
∣∣Σmk=n+1z
```

```
k
k!
```

##### ∣∣

##### ∣∣

```
= |z|
```

```
n+1
(n+ 1)!
```

##### ∣∣

```
∣∣1 + z
n+ 2
```

```
+...+ z
```

```
m−n− 1
(n+ 2)...(m−1)m
```

##### ∣∣

##### ∣∣

```
≤ |z|
```

```
n+1
(n+ 1)!(1 +
```

```
|z|
n+ 2+
```

```
|z|^2
(n+ 2)^2 +...+
```

```
|z|m−n−^1
(n+ 2)m−n−^1 )
```

En désignant parn 0 > 2 un entier naturel tel quen 0 + 2>|z|, on a pourm > n > n 0 ,

```
|um−un|≤ |z|
```

```
n+1
(n+ 1)!
```

##### 1

```
1 −n|z+2|
```

ce qui implique que(un(z))n∈Nest de Cauchy, donc convergente.

### 2.3 Opérations sur les suites convergentes

Dans l’ensembleCN, on définit la somme des suitesu= (un)n∈Netv= (vn)n∈N
paru+v= (un+vn)n∈Net le produit deupar le scalaireλparλu= (λun)n∈N.
Muni de ces loisCNest un espace vectoriel surC. On définit également le produit
des suitesu= (un)n∈Netv= (vn)n∈Nparu.v= (un.vn)n∈N, ce qui confère àCNune
structure d’algèbre^1 commutative surC

1. Une algèbre sur un corps commutatifKou simplement uneK-algèbre, est une structure
   algébrique(A,+,×,·)telle que
   i(A,+,·)est un espace vectoriel surK
   ii la loi×définie deA×AdansA(loi de composition interne) est distributive par rapport à la
   loi+;
   iii pour tout(a,b)∈K^2 et pour tout(x,y)∈A^2 ,(a.x)×(b.y) = (ab).(x×y)
   elle est commutative si la loi de composition interne×est commutative.

**2.3. OPÉRATIONS SUR LES SUITES CONVERGENTES**

**Proposition 2.3.1** Soient(un)et(vn)deux suites réelles ou complexes. Si(un)est bornée
et(vn)converge vers 0 , alors la suite(unvn)converge vers 0.

**Preuve :** La suite(un)étant bornée, il existe un réelKtel que|un| ≤Kpour tout
n∈N. Fixons > 0. il existeN∈Ntel que|vn|< /Kpour toutn > N, grâce à la
convergence de(vn)vers 0. Ainsi, pourn > N,|unvn|=|un|.|vn|< , 2

**Théorème 2.3.2** Soientu= (un)n∈Netv= (vn)n∈Ndeux suites telles quen→lim+∞un=`

etn→lim+∞vn=`′

1. Les suitesu+vetu.vconvergent respectivement vers`+`′et`.`′.
2. Dans le cas où les suitesuetvsont réelles, les suitesmin{u,v}= (min{un,vn})n∈N
   etmax{u,v}= (max{un,vn})n∈Nconvergent respectivement versmin{`,`′}et
   max{`,`′}.
3. Si`′ 6 = 0, il existe alors un entiern 0 tel que la suiteuv = (uvnn)n≥n 0 soit définie et
   cette suite converge vers``′.
4. Si` > 0 , il existe un entiern 0 tel queun > 0 pour toutn ≥ n 0 et la suite
   √u= (√u
   n)n≥n 0 converge vers

##### √

##### `

**Preuve :**

1. Soitun réel strictement positif.

```
∃n 1 ∈N,∀n∈N,(n > n 1 )⇒|un−`|< .
```

```
Et,
∃n 2 ∈N,∀n∈N,(n > n 2 )⇒|vn−`′|< .
En posantn 0 = maxn 1 ,n 2 , on a :
```

```
∀n > n 0 ,|(un+vn)−(`+`′)|≤|un−`|+|vn−`′|< 2 
```

```
ce qui signifie que la suiteu+vconverge vers`+`′. Par ailleurs, comme la
suite convergevest bornée (car converge), il existe un réelM > 0 tel que :
```

```
∀n∈N,|vn|≤M
et pour toutn≥n 0 , on a :
```

```
|unvn−``′| = |unvn−`vn+`vn−``′|
≤ |unvn−`vn|+|`vn−``′|
≤ |vn||un−`|+|`||vn−`′|
≤ (M+|`|),
```

```
ce qui signifie que la suiteu.vest convergente vers`.`′.
```

**2.3. OPÉRATIONS SUR LES SUITES CONVERGENTES**

2. Se déduit de la relation

```
∀a,b∈R,
```

##### {

```
max(a,b) =^12 (a+b+|a−b|)
min(a,b) =^12 (a+b−|a−b|)
```

##### }

3. Si`′ 6 = 0alors à partir d’un certain rangn 0 , les éléments de la suitevsont
non nuls et la suiteuvest définie à partir de ce rang. On peut en fait trouver
n 0 tel que|vn|> |`

```
′|
2 pourn≥n^0 comme nous le voyons dans le théorème
2.1.15, ce qui entraine que :
```

```
∀n > n 0 ,
```

##### ∣∣

##### ∣∣^1

```
vn−
```

##### 1

##### `′

##### ∣∣

##### ∣∣=

##### ∣∣

```
∣∣vn−`
```

```
′
vn`′
```

##### ∣∣

##### ∣∣≤^2

##### |`′|^2

```
|vn−`′|
```

```
etlimn−→+∞v^1 n=^1 `′. Le résultat sur le produit nous donne alorslimn−→+∞(uvnn=
`
`′
```

4. Si` > 0 , on peut en fait trouver un entiern 0 tel queun≥` 4 pour toutn≥n 0
   et avec : ∣
   ∣∣√un−√`∣∣∣=

##### ∣∣

```
∣∣u√n−`
un +
```

##### √

##### `

##### ∣∣

##### ∣∣≤^2

##### 3

##### √

##### `

```
|un−`|
```

```
on déduit quen→lim+∞√un=
```

##### √

##### `.

##### 2

**Théorème 2.3.3** Soientu = (un)n∈Netv = (vn)n∈Ndeux suites réelles telles que

n→lim+∞un=`etn→lim+∞vn=`′.

1. Si`>`′on a alorsun> vnà partir d’un certain rang.
2. Si à partir d’un certain rang,un< vnalors`≤`′.
3. SiMest un majorant de la suiteu, alors`≤M.
4. Simest un minorant de la suiteu, alors`≥m.

**Preuve :** On applique le théorème 2.1.15 aux suitesv−u,M−uetu−m. 2

**Remarque 2.3.4** 1. Sin→lim+∞un= +∞et(vn)est minorée alorsn→lim+∞(un+vn) =

```
+∞. De même sin→lim+∞un=−∞et(vn)majorée alorsn→lim+∞(un+vn) =−∞.
```

2. sin→lim+∞un= +∞etn→lim+∞=`∈Ralors

```
n→lim+∞unvn=
```

##### {

```
+∞ si ` > 0
−∞ si ` < 0
```

##### .

### 2.4 Suites adjacentes

3. sin→lim+∞un=−∞etn→lim+∞un=`∈Ralors

```
nlim→∞unvn=
```

##### {

```
−∞ si ` > 0
+∞ si ` < 0
```

##### .

On a une forme indéterminé pouru+vsin→lim+∞un= +∞etn−→lim+∞vn=−∞et
pouru×vsin−→lim+∞un=±∞etn−→lim+∞vn= 0. Dans ces différents cas, une étude plus

approfondie est necessaire pour conclure.

### 2.4 Suites adjacentes

**Définition 2.4.1** Deux suites réelles(an)et(bn)sont dites adjacentes si l’une des suites
est croissante (au sens large), l’autre suite décroissante au sens large et si la différence des
deux tend vers 0.

**Remarque 2.4.2** Si(an)et(bn)sont deux suites adjacentes avec(an)croissante et(bn)
décroissante, alors pour toutn∈Nan≤bnEn effet, si(an)est croissante et(bn)décrois-
sante alors(bn−an)est décroissante. Si la suite(bn−an)est décroissante et converge
vers 0 alors(bn−an)est une suite à termes positifs. Donc, pour toutn,bn−an≥ 0 donc
bn≥an. On peut même observer que pour tous entiersp,q(non nécessairement égaux),
ap≤bq. En effet, sip≤qalors
ap≤aq≤bq,

et sip≥qalorsap≤bp≤bq.

**Théorème 2.4.3** Soient(an)et(bn)deux suites adjacentes (où(an)est croissante et(bn)
est décroissante). Alors ces deux suites sont convergentes, et ont la même limite`∈R.
De plus, pour tout entier natureln,an≤`≤bn

**Preuve :** La suite(an)est croissante, et majorée parb 0. Or on déduit de l’hypothèse
de la borne supérieure que toute suite croissante et majorée converge. La suite
(an)admet donc une limite`. Puisque la suite(bn−an)converge vers 0 , on en
déduit que la suite(bn)converge également vers`. De plus, pour toutn,an≤`≤
bn: la prémière inégalité se déduit, par passage à la limite, de

```
∀q,an≤bq
```

et la seconde se déduit de
∀p,ap≤bn.
2

### 2.5 Suites particulières

**Exemple 2.4.4** Montrons que les suites(un)n∈Net(vn)n∈Ndéfinie respectivement par

```
un= Σnk=0k^1!
```

et
vn=un+n^1!

sont adacentes. Il est clair que(un)est croissante et pourn≥ 1 on a :

```
vn+1−vn=
```

##### 1

```
(n+ 1)!+
```

##### 1

```
(n+ 1)!−
```

##### 1

```
n!=−
```

```
n− 1
(n+ 1)!<^0
```

donc(vn)n≥ 1 est décroissante. De plus avec

```
n−→lim+∞vn−un= limn−→+∞n^1 != 0,
```

on en déduit que ces suites sont adjacentes

### 2.5 Suites particulières

#### 2.5.1 Récurrence homographique

```
Suites arithméco-géométriques
```

**Définition 2.5.1** Une suiteun)réelle ou complexe est :

1. Arithmétique lorsqu’il existeb∈Ctel que pour toutn∈N,un+1=un+b.ben
   est la raison.
2. Géométrique lorsqu’il existea∈Ctel que,pour toutn∈N,un+1=aun·aenest
   la raison.
3. Arithmético-géométrique lorsqu’il existea,binCtels que pour toutn∈N,un+1=
   aun+b.

**Proposition 2.5.2** Etant donné une suite arithmétique(vn)de raisonr,

1. Pour tout entiern 0 ≤n, on a

```
vn=vn 0 + (n−n 0 ).r
```

2. sir > 0 sa limite est+∞
3. sir < 0 sa limite est−∞
4. si la raison est nulle, la suite est constante et converge vers la constante.

**2.5. SUITES PARTICULIÈRES**

5. La somme de termes consécutifs de(vn)à partir du rangp∈Nest

```
vp+vp+1+...+vn=(n−p+ 1)(vn+vp)
2
.
```

**Proposition 2.5.3** Etant donné une suite géométrique(un)n∈Nde raisonq,

1. pour tout entiers naturelsn 0 ≤n

```
un=un 0 qn−n^0
```

```
.
```

2. Siq≤− 1 , la suite diverge et ne possède pas de limite. DansR=R∪{−∞,+∞}
   les valeurs d’adhérence sont+∞et−∞.
3. Siq=− 1 , la suite diverge et possède deux valeurs d’adhérenceu 0 et−u 0
4. Si|q|< 1 , la suite converge vers 0
5. Siq= 1, la suite est constante et converge versu 0
6. Siq > 1 , la suite est divergente mais possède une limite égale à+∞siu 0 > 0 et
   −∞pouru 0 < 0
7. Pour deux entiers 0 ≤m < n

```
Σpp==nm=u 0 qm
```

```
1 −qn+1−m
1 −q
pourqdifférent de 1
```

**Remarque 2.5.4** Etudions la suiteu= (an)n∈Noùa∈Csia= 0alorsuest constante
égale à 0. Pour|a|> 1 , la formule du binôme de Newton nous dit que

```
|an|≥1 +n(|a|−1)
```

et comme|a|− 1 > 0 on a

n−→lim+∞n(|a|−1) = +∞,
ce qui entraîne que

```
n−→lim+∞|an|= +∞
```

et la suiteudiverge. Pour 0 <|a|< 1 , nous avons|^1 a|> 1. Ainsi en écrivant que

```
|a|n=^11
|a|n
```

**2.5. SUITES PARTICULIÈRES**

nous avons

n−→lim+∞|a|n= 0.
Pour|a|= 1, on aa=eiθ. Siθ = 2kπaveck∈Z(soita= 1), alorsuest constante
égale à 1 : Supposons queθ /∈ 2 πZet montrons par l’absurde que la suite ne converge
pas. Nous supposons qu’il existe`∈Ctel quen−→lim+∞einθ=`. Nous avons l’implication

```
n−→lim+∞un=`=⇒nlim−→∞|un+1−un|= 0
```

En effet, si > 0 est fixé, il existeNtel quen > Nimplique|un−`|< 2. Il vient alors
quen > Nimplique

```
|un+1−un|=|un+1−`+`−un|≤|un+1−`|+|un−`|< 
```

puisquen+ 1> n > N. Or
∣∣
an+1−an

##### ∣∣

##### =

##### ∣∣

```
ei(n+1)θ−einθ
```

##### ∣∣

##### =

##### ∣∣

```
eiθ− 1
```

##### ∣∣

```
= sinθ 2
```

On déduit quesinθ 2 = 0et par conséquent queθ= 2kπce qui est contradictoire. La suite
uest donc divergente.

**Proposition 2.5.5** Soit(un)une suite arithmético-géométrique :un+1=aun+b.

1. Sia= 1, c’est une suite arithmétique et si c’estb= 0c’est une suite géométrique.
2. Sia 6 = 1, la suite(vn)définie parvn=un− 1 −ba, est géométrique de raisona.

Suite homographique

**Définition 2.5.6** Une suite(un)(complexe ou réelle) est dite homographique, lorsqu’il
existe des constantesa,b,c,detdtelles que :

```
1.c 6 = 0etad−bc 6 = 0
```

2. pour toutn∈N,
   un+1=aucun+b
   n+d

##### (2.7)

**Proposition 2.5.7** Soit(un)une suite homographique définie par la relation (2.7). On
considère l’équation

```
x=axcx++db (2.8)
```

1. Siαest une racine de (2.8) il existep∈Ntel queup=α, alors la suite(un)est
   constante.
2. Si l’équation (2.8) a deux racines distinctesαetβ, alors la suite(vn)définie par
   vn=uunn−−αβest une suite géométrique ;
3. Si l’équation (2.8) a une racine doubleα, la suite(vn)définie parvn = un^1 −α est
   une suite arithmétique

**2.5. SUITES PARTICULIÈRES**

#### 2.5.2 Suites récurrentes linéaires

```
Nous désignons parK, l’ensembleRouC
```

**Définition 2.5.8** Soit(a,b)∈K×K. Une suite récurrente linéaire d’ordre 2 est une
suite(un)n∈Nqui satisfait la rélation de récurrence pour toutn≥ 0

```
un+2=aun+1+bun.
```

**Théorème 2.5.9** Soient(a,b)∈R^2 avecb 6 = 0etL(a,b)l’ensemble de suites récurrentes
linéaires d’ordre 2 :

```
L(a,b) = (un)n∈N∈RNtel que∀n∈N,un+2=aun+1+bun.
```

L’ensembleL(a,b)est unR-espace vectoriel de dimension 2.

**Preuve :** Pour montrer queL(a,b)est unR-espace vectoriel nous montrons que
c’est un sous-espace vectoriel deRN. La suite nulle est une suite recurrente lineaire
d’ordre 2 doncL(a,b)est non vide. Soituetvdeux suites deL(a,b)et(α,β)∈R^2.
Posonsw=αu+βv. Nous avons alors :

```
wn+2 = αun+2+βvn+2
= α(aun+1+uvn) +β(avn+1+bvn)
= a(αun+1+βvn+1) +b(αun+βvn)
= awn+1+bwn
```

Doncw∈L(a,b). AinsiL(a,b)est un sous-espace vectoriel deRN. 2

```
Considérons l’applicationφsuivante :
φ: L(a,b) → R^2
(un)n∈N 7→ (u 0 ,u 1 )
```

##### .

Nous remarquons deux choses :

1. L’applicationφest linéaire. En effet pour tout(u,v)∈L^2 (a,b)et tout(α,β)∈
   R^2 ,
   φ(αu+βv) = (αu 0 +βv 0 ,αu 1 +βv 1 ) =αφ(u) +βφ(v).
2. L’applicationφest bijective (en effet un élémentudeL(a,b)est uniquement
   déterminé par ses deux premiers termes.) Précisons cela. Siu 0 =u 1 = 0alors
   uest la suite, donckerφest réduit à la suite nulle etφest injective. Enfin,
   étant donné deux sclaires(α,β)∈R^2 on peut définir une suiteu∈ρ(a,b)
   telle queu 0 = αetu 1 =β. L’applicationφest surjective. En conclusionφ
   est un isomorphisme d’espace vectoriel. CommeR^2 est de dimension 2, il
   en est de même pourL(a,b)

2

**2.5. SUITES PARTICULIÈRES**

#### 2.5.3 Description des suites récurrentes linéaires

Une suite géométrique(rn)n∈Nnon nulle est dansL(a,b)si et seulement sir
est solution de l’équation caractéristique

```
X^2 −aX−b= 0. (2.9)
```

Commebest supposé non nul de (2.9) n’admet pas 0 comme solution.

1. (2.9) a deux racines distinctes. Notonsαetβles deux racines de (2.9). Les
   deux suites géométriques(αn)n∈Net(βn)n∈Nsont dansρ(a,b)et sont linéai-
   rement indépendantes (le vérifier par exemple sur leur image par isomor-
   phismeφ), elles forment donc une base deρ(a,b)puisquedimL(a,b) = 2.
   Ainsi :u∈L(a,b)si et seulement s’il existe(η,ν)∈R^2 tel que :

```
∀n∈N,un=ηαn+νβn.
```

2. (2.9) a une racine double. Notonsμla racine de (2.9). Les deux suites(μn)n∈N
   et(nμn)n∈Nsont dansL(a,b)et sont linéairement indépendantes, elles forment
   donc une base deL(a,b)puisquedimL(a,b) = 2. Ainsi :u∈ L(a,b)si et
   seulement s’il existe(η,ν)∈R^2 :

```
∀n∈N,un= (η+νn)μn.
```

3. (2.9) n’a pas de racines réelles. L’équation (2.9) a deux racines complexes
   conjuguéesωetω. Posonsr = |ω|etθ = argω. On vérifie que les suites
   (rncos(nθ))n∈Net(rnsin(nθ))n∈Nsont linéairement indépendantes, elles forment
   donc une base deL(a,b)puisquedimL(a,b) = 2. Ainsi :u∈ ρ(a,b)si et
   seulement s’il existe(η,ν)∈R^2 tel que :

```
∀n∈N,un=ηrncos(nθ) +νrnsin(nθ).
```

**Exemple 2.5.10** Etudier la suite réelle(un)n∈Ndéfinie parun+2= 2un−un+1,u 0 = 0
etu 1 = 3.
l’équation caractéristique (2.9) estX^2 +X−2 = 0, elle admet deux racines distinctes 1
et− 2. Donc il existe(α,β)∈R^2 tel que pour toutn∈N,un=α+(− 2 n)β. Déterminons
αetβ. Nous avons : {
u 0 =α+β= 0
u 1 =α− 2 β= 3

Doncα= 1etβ=− 1. Ainsi pour toutn∈N,un= 1−(− 2 n).

### 2.6 Exercices

### 2.6 Exercices

**Exercice 6** Calculer la limite

1. de la suite(un)n∈N∗, définie par

```
un=
```

```
∑n
k=0
```

```
ek+1k
n
```

2. de la suite(vn)n∈N, définie par
   vn= n

##### √

```
n!
```

**Exercice 7** On considère la suite(un)n∈N∗définie par

```
un= 1 +^1
2
```

##### +...+^1

```
n
```

##### .

1. Etudier la monotonie de la suite(un)n∈N.
2. Montrer queu 2 n−un≥^12
3. La suite(un)n∈N∗est-elle de Cauchy? Justifier.
4. Donner avec justification la limite si elle existe de la suite(un)n∈N∗

**Exercice 8** Soit la suite(un)n∈N∗de terme généralun=n (^3) +3n+3n (^2) +2net la suite(sn)définie
par
sn= Σnp=1up.

1. Montrer qu’il existe trois réelsa,betctels quen (^3) +3n+3n (^2) +2n=na+n+1b +n+2c

2. En déduire que la suite(sn)converge vers une limite`que l’on déterminera.

**Exercice 9** On considère les suites(un)net(vn)ndéfinies respectivement par

```
un= 1 +^1
1!
```

##### +...+^1

```
n!
```

```
etvn=un+^1
n!
```

1. Montrer que(un)net(vn)nconvergent vers une même limite`.
2. Démontrer que`∈R\Q.

**Correction 9** Il est clair queuest croissante et pourn≥ 1 , on a :

```
vn+1−vn=(n+ 1)!^1 +(n+ 1)!^1 −n^1 !=−(nn+ 1)!−^1 ≤ 0
```

donc(vn)n≥ 1 est décroissante. De plus avecnlim→∞(vn−un) = limn→∞n^1 != 0on déduit que
ces suites sont adjacentes. Elles convergent donc vers la limite`avec

```
un< ` < vn ∀n∈N∗. (2.10)
```

Si nous supposons que`est rationnel, alors il existep,q∈N∗tel que`=pq. Il vient alors
de (2.10) queuq<pq< vq. En multipliant parq!nous obtenons queq!uq<(q−1)!p <
q!vq. Orquq! ∈ Netq!vq = uq+ 1. Doncq!uq < (q−1)!p < q!uq+ 1, ce qui est
impossible.

**2.6. EXERCICES**

**Exercice 10** Soitu = (un)n∈Nune suite complexe telle que les deux suites extraites
(u 2 n)n∈Net(u 2 n+1)n∈Nsont convergentes. A quelle condition la suite(un)n∈N est elle
convergente?

**Correction 10** Si et seulement si les deux suites extraites convergent vers la même limite
`.

**Exercice 11** Soient(un)n∈Nune suite complexe et(vn)n∈Nla suite (des moyennes de
Césaro) définie par :

```
vn=
```

##### 1

```
n
```

```
n∑− 1
```

```
k=0
```

```
uk
```

Montrer que si(un)n∈Nconverge vers`alors(vn)n∈Nconverge vers la même limite.

**Correction 11** Soit(un)n∈Nune suite qui converge vers`.

```
∀ > 0 ,∃n∈N|∀n≥n,|un−`|< .
```

C’est-à-dire que pourn > n,

```
|vn−`| = n^1
```

```
∣∣∑n− 1
k=0uk−`
```

##### ∣∣

```
≤^1 n|
```

```
∑n
k=0uk−`|+n^1
```

```
∣∣∑n− 1
k=n+1uk−`
```

##### ∣∣

```
≤ Cn+
```

D’où le résultat annoncé

**Exercice 12** 1. Soit(un)n∈Nune suite réelle ou complexe telle queunsoit non nul à
partir d’un certain rang etλun scalaire. Montrer que

```
nlim→∞
```

##### ∣∣

```
∣∣un+1
un
```

##### ∣∣

```
∣∣=λ⇒ lim
n→∞
```

```
√nun=λ
```

2. On considère la suite(un)n∈Ndéfinie par

```
un=
```

##### {

```
an^2 bn^2 si nest pair
an+1^2 bn−^21 si nest impair
```

```
où 0 < a < b.
(a) Calculer si elles existes, les limites suivantes
```

```
n→lim+∞ n
```

##### √

```
unetn→lim+∞
```

##### ∣∣

```
∣∣un+1
un
```

##### ∣∣

##### ∣∣

```
(b) Conclure.
```

**2.6. EXERCICES**

**Correction 12** 1. On peut supposer, quitte à réindéxer la suite, que tous lesunsont
non nuls. Silimn→+∞

##### ∣∣

```
∣unu+1n
```

##### ∣∣

```
∣ = λ ≥^0 alorslimn→+∞ln
```

##### (∣∣

```
∣unu+1n
```

##### ∣∣

##### ∣

##### )

```
= μ, avec
μ= ln(λ)pourλréel non nul etμ=−∞siλ= 0, soitlimn→+∞ln(|un+1|)−
ln(|un|) =μet en utilisant le résultat de l’exercice précédent, nous avons
```

```
n→lim+∞^1 n
```

```
n∑− 1
```

```
k=0
```

```
ln(|uk+1|)−ln(|uk|) =μ
```

```
soit :
n→lim+∞n^1 (ln(|un|)−ln(|u^0 |)) =μ
encore équivalent àlimn→+∞
```

##### (

```
ln(√nun)
```

##### )

```
=μ, ce qui donnelimn→+∞√nun=λ.
(La réciproque est fausse)
```

2. (a) 0 < a < b, on a

```
√nun=
```

##### 

##### 

##### 

##### (

```
an^2 bn^2
```

```
)n 1
=
```

##### √

```
ab si nest pair
(
an+1^2 bn−^21
```

```
)n^1
=
```

##### √

```
ab
```

```
(a
b
```

```
) 21 n
si nest impair
```

```
qui converge vers
```

##### √

```
ab.
```

```
un+1
un =
```

##### 

##### 

##### 

```
an+2^2 bn^2
an^2 bn^2 =a si nest pair
an+1 2 bn+1 2
an+1^2 bn−^21 =b si nest impair
qui n’admet pas de limite lorsquentend vers+∞.
(b) La convergence de la racine√nunn’implique pas celle du quotientuun+1n.
```

3. Appliquer ce qui précède, en remarquant que chaque suite est de la forme(√nun).
   Calculerlimuun+1n pour chacune des suites.

**Exercice 13** Soient(un),(vn)et(wn)les suites définies par la donnée deu 0 ,v 0 etw 0 et
les relations de récurrence

```
un+1=
```

```
vn+wn
2 ;vn+1=
```

```
un+wn
2 etwn+1=
```

```
un+vn
2
```

Etudier les suitesu,vetwpuis déterminerun,vnetwnen fonction denen recherchant
des combinaisons linéaires intéressantes deu,vetw. En déduiren→lim+∞un,n→lim+∞vn,et

n→lim+∞wn.

**Exercice 14** Montrer que les suitesuetvdéfinies parun=

∑n
k=0k^1 !etvn=un+nn^1!
sont adjacentes.

**Exercice 15** Déterminerunen fonction denet de ses premiers termes dans chacun des
cas suivants :

**2.6. EXERCICES**

```
1.∀n∈N, 4 un+2= 4un+1+ 3un.
2.∀n∈N, 4 un+2=un.
3.∀n∈N, 4 un+2= 4un+1+ 3un+ 12.
4.∀n∈N, un^2 +2 =un^1 +1+u^1 n
```

# Chapitre 3

# Limites, continuités et dérivabilités

### 3.1 Limite et continuité

#### 3.1.1 Généralités

```
SoientXetYdeux ensembles non vides.
```

**Définition 3.1.1** SiDest une partie non vide deX, la correspondancefqui à chaque
élémentxdeDassocie un élément uniqueydeY est appelée application deDdansYou
fonction définie surDà valeurs dansY. On dit aussi quefest une fonction définie dans
X, à valeurs dansY, dont le domaine de définition estD. La relation entre l’élémentxde
Det son correspondantydansYest notéey=f(x). On note

```
f: D → Y
x 7→ f(x)
```

##### .

Soitfune fonction définie dansXà valeurs dansY et de domaine de définition
D.

- SiA⊂Dalors l’image deAest le sous-ensemblef(A)deY défini par

```
f(A) ={f(x)/x∈A}.
```

```
f(D)est appelé aussi ensemble image def.
```

- Le graphe defest le sous-ensembleGfdeX×Y défini par

```
Gf={(x,f(x))/x∈D}.
```

- SiB⊂Yalorsf−^1 (B)désigne le sous-ensemble deXdéfini par

```
f−^1 (B) ={x∈D/f(x)∈B}.
```

**3.1. LIMITE ET CONTINUITÉ**

```
SiY =R, alorsfest une fonction numérique ; si en plusD∈R, on dit quef
est une fonction numérique d’une variable réelle. L’ensemble des fonctions
numériques d’une variable réelle définies surDest notéRD. Dans la suite,
Dfdésignera le domaine de la fonction numériquef.
```

**Définition 3.1.2** Soientfetgdeux fonctions numériques d’une variable réelle. SiDf∩
Dg 6 = 0, alors les fonctionsf+g,f−g,fgsont définies surDf∩Dgpar(f+g)(x) =
f(x) +g(x),(f−g)(x) =f(x)−g(x),(fg)(x) =f(x)g(x). La fonction quotientfgest
définie par(fg)(x) =fg((xx))pour toutx∈Df∩Dgtel queg(x) 6 = 0.

**Exemple 3.1.3** Sif(x) =

##### √

```
4 −x^2 etg(x) =
```

##### √

x− 1 alorsDf = [− 2 ,2]etDg =
[1,+∞[. Donc

```
1.f+g,f−getfgsont définies surDf∩Dg= [1,2]par
(a) (f+g)(x) =
```

##### √

```
4 −x^2 +
```

##### √

```
x− 1
(b) (f−g)(x) =
```

##### √

```
4 −x^2 −
```

##### √

```
x− 1
(c)(fg)(x) = (
```

##### √

```
4 −x^2 )(
```

##### √

```
x−1) =
```

##### √

```
(4−x^2 )(x−1)
```

2. fgest définie sur]1,2]par(fg)(x) =

##### √

```
4 −x^2
x− 1. Bien que l’expression
```

##### √

```
(4−x^2 )(x−1)
ci-dessus soit définie aussi sur]−∞,−2[, elle ne représente pasfgpour ces valeurs
dex, vu quefetgne sont pas définies sur cet ensemble.
```

Dans la suite de ce cours,nous considérons essentiellement les fonctions nu-
mériques d’une variable réelle.

**Définition 3.1.4** SoientDune partie deRetf:D→Rune fonction.

1. On dit quefest :
   (a) minorée s’il existem∈Rtel que pour toutx∈Don aitf(x)≥m.
   (b) majorée s’il existeM∈Rtel que pour toutx∈Don aitf(x)≤M.
   (c) bornée sifest majorée et minorée.
2. Sifest majorée, on appelle borne supérieure defle nombre réel

```
supf
D
```

```
= sup{f(x)/x∈D}.
```

```
De même on définit la borne inférieure d’une fonction minorée surD.
```

3. On dit quefadmet un maximun ena∈Dsif(a)est le maximun de la partie
   f(D)
4. On dit quefadmet un maximun local ena∈Ds’il existe un intervalle ouvert
   I contenantatel quef(a)soit le maximun def(D∩I). On définit de même la
   notion de minimun et de minimun local.

**3.1. LIMITE ET CONTINUITÉ**

5. Un extremun (local) est un maximun (local) ou un minimun (local)

**Remarque 3.1.5** Une fonction bornée possède toujours une borne supérieure et une
borne inférieure mais pas forcément un maximun et un minimun.

**Notation 3.1.6** Soienta,b∈R,a < b.

1. SiI=]a,b[,]a,b],[a,b[ou[a,b]alors on noteI= [a,b]et

```
◦
I=]a,b[
```

2. SiI=]a,+∞[ou[a,+∞[alorsI= [a,+∞[et

```
◦
I=]a,+∞[
```

3. SiI=]−∞,b[ou]−∞,b]alorsI=]−∞,b]ou

```
◦
I=]−∞,b[
```

4. SiI=]−∞,+∞[=RalorsI=I=Ret

```
◦
I=I
```

Iest appelé adhérence deIdansRet

◦
Iest l’intérieur deI; Dans la suiteIdésignera un
intervalle de l’une des formes ci-déssus.

**Définition 3.1.7** Soitfune fonction définie surDfetI⊂Df.

```
1.fest décroissante (resp. strictement décroissante) surIlorsque
```

```
∀(x,x′)∈I^2 ,x < x′⇒f(x)≥f(x′)(resp.f(x)> f(x′))
```

```
2.fest croissante (resp. strictement croissante) surIlorsque
```

```
∀(x,x′)∈I^2 ,x < x′⇒f(x)≤f(x′)(resp.f(x)< f(x′))
```

```
3.fest monotone (resp. strictement monotone) lorsqu’elle est croissante ou décrois-
sante (resp. strictement croissante ou strictement décroissante).
```

4. Si le domaine de définitionDfdefest symétrique par rapport à 0 ; c’est-à-dire

```
x∈Df⇔−x∈Df,
```

```
alorsfest :
```

- paire sif(−x) =f(x)pour toutx∈Df,
- impaire sif(−x) =−f(x)pour toutx∈Df.

5. On dit queT ∈ R\ { 0 }est une période def siDf est stable par translation
   x7→x+T; c’est-à-dire six∈Dfalorsx+T ∈Df, etf(x+T) =f(x)pour
   toutx∈Df.

**3.1. LIMITE ET CONTINUITÉ**

#### 3.1.2 Notion de limite d’une fonction TABLE DES MATIÈRES

```
Iest toujours un intervalle deR(voir notation 3.1.6).
```

**Définition 3.1.8** Soientf:I→Rune fonction eta∈I.

1. On dit quefadmet`comme limite enasi

```
∀ > 0 ∃δ > 0 tel que∀x∈I,|x−a|< δ⇒|f(x)−`|< .
```

```
On notexlim→af(x) =`.
```

2. On dit quef(x)tend vers+∞quandxtend versasi

```
∀K∈R∗+ ∃δ > 0 tel que∀x∈I,|x−a|< δ⇒f(x)> K.
```

```
On notexlim→af(x) = +∞.
```

3. On dit quefadmet`comme limite quandxtend vers+∞si

```
∀ > 0 ∃K∈R∗+tel que∀x∈I,x > K⇒|f(x)−`|< .
```

```
On notex→lim+∞f(x) =`.
```

4. On dit queftend vers+∞quandxtend vers+∞si

```
∀K∈R∗+ ∃M∈R∗+tel que∀x∈I,x > M⇒f(x)> K.
```

```
On notex→lim+∞f(x) = +∞
```

On définit de mêmex→±∞lim f(x) =−∞etxlim→af(x) =−∞.

**Exemple 3.1.9** 1.xlim→ 0 xcosx^1 = 0, car pour tout > 0 , si|x|< alors

##### ∣∣

```
xcosx^1
```

##### ∣∣

##### ≤

```
|x|< 
```

2. On montre de même que :xlim→ax=apour touta∈R,x→lim+∞xn= +∞pour tout
   n∈N∗,

```
x→−∞lim xn=
```

##### {

```
+∞ si n est pair et non nul
−∞ si n est impair
```

```
x→lim+∞
```

##### √

```
x= +∞,x→±∞lim x^1 n= 0,limx→ 0 x^12 n= +∞∀n∈N∗
```

**Proposition 3.1.10** Soientf:I→Reta∈I. Sifadmet une limite ena, cette limite
est unique.

**Preuve :** Comme dans le cas des suites, nous procédons par l’absurde. Supposons
quefadmet deux limites distinctes`et`′ena, avec`<`′. Puisque`<`′nous
prenons dans la définition de la limite=`′ 2 −`. Il existe alorsδ > 0 tel que pour

**3.1. LIMITE ET CONTINUITÉ**

toutx∈I,|x−a|< δimplique que|f′x)−`|< etδ′> 0 tel que pour toutx∈I,
|x−a|< δ′implique|f(x)−`′|< . On a

```
`′−`=|`′−f(x) +f(x)−`|≤|`′−f(x)|+|f(x)−`|
```

par inégalité triangulaire. En prenantx∈Itel que|x−a|<min(δ,δ′), on obtient
`′−` < `′−`, ce qui est absurde 2

**Proposition 3.1.11** Soientfetgdeux fonctions numériques d’une variable réelle défi-
nies sur l’intervalleI,aune borne deIou un élément deI.

1. Sifadmet une limite`∈Rena, alors
   - Sia∈R, il existeα > 0 tel quefsoit bornée surI∩]a−α,a+α[,
   - Sia= +∞alors il existeb∈Rtel quefsoit bornée surI∩]b,+∞[,
   - Sia=−∞alors il existeb∈Rtel quefsoit bornée surI∩]−∞,b[.
2. Sifetgont une limite dansRquandxtend versa, alors

```
limx→a(f(x) +g(x)) = limx→af(x) + limx→ag(x)
```

```
et
xlim→a(f(x)g(x)) = limx→af(x)limx→ag(x)
```

3. Sixlim→af(x)∈{−∞,+∞}etlimx→ag(x) =`∈Ralors
   - xlim→a(f(x) +g(x)) = limx→af(x)et
   - xlim→a(f(x)g(x)) =

##### 

##### 

##### 

```
−x→lima f(x) si ` < 0
```

```
xlim→af(x) si ` >^0
```

##### .

- xlim→afg((xx))= 0

4. Sixlim→af(x) = limx→ag(x) = +∞alorsxlim→a(f(x) +g(x)) = limx→a(f(x)g(x)) = +∞
5. Sixlim→af(x) = limx→ag(x) =−∞alorslimx→a(f(x) +g(x)) =−∞etxlim→a(f(x)g(x)) =
   +∞
6. Sifadmet une limite` 6 = 0quandxtend versaalors

```
xlim→a
```

##### 1

```
f(x)=
```

##### 1

##### `

7. Si
   xlim→a|f(x)|= +∞
   alors
   xlim→af(^1 x)= 0
   .

**3.1. LIMITE ET CONTINUITÉ**

8. Nous notonsJun intervalle de la forme

##### J=

##### 

##### 

##### 

```
I∩]a−δ,a+δ[ si a∈I
]b,+∞[ si a= +∞
]−∞,c[ si a=−∞
oùδ > 0 ,b,c∈R
(a) Sixlim→af(x) = 0et sigest définie et bornée surJalorslimx→af(x)g(x) = 0
(b) Sixlim→af(x) = 0et sif(x)≥ 0 surJalorsxlim→af(^1 x)= +∞.
(c) Sif(x)≤g(x)sur un intervalleJalors
i. xlim→af(x) = +∞⇒xlim→ag(x) = +∞et
```

```
xlim→ag(x) =−∞⇒xlim→af(x) =−∞
ii. Sixlim→af(x) =`etxlim→ag(x) =`′alors`≤`′.
(Gendarmes) Sif(x)≤ g(x)≤h(x)surJet silimx→af(x) = limx→ah(x) =`
alorsxlim→ag(x) =`
```

**Preuve :** Les démonstrations sont les mêmes que dans le cas des suites. 2

Soitx 0 ∈I. posonsI 1 =]x 0 ,+∞[∩I etI 2 =]−∞,x 0 [∩I,I 1 ′ = [x 0 ,+∞[∩Iet
I 2 ′=]−∞,x 0 ]∩I.

**Définition 3.1.12** Soitfune fonction réelle définie surI\{x 0 }. On dit que`∈Rest
la limite à droite (resp. à gauche) enx 0 def, si la restriction defàI 1 (resp. àI 2 ), admet`
pour limite enx 0.

**Notation 3.1.13** 1. Lorsqu’elle existe, la limite à droite defenx 0 est notéexlim→x 0
x>x 0

```
f(x)
ou lim
x→x+ 0
```

```
f(x)
```

2. Lorsqu’elle existe, la limite à gauche defenx 0 est notéexlim→x 0
   x<x 0

```
f(x)ou lim
x→x− 0
```

```
f(x)
```

**Exemple 3.1.14** Soitn∈Z

```
xlim→n
x > n
```

```
E(x) =n
```

et

```
xlim→n
x < n
```

```
E(x) =n− 1
```

On déduit que la fonction partie entière n’admet de limite en aucunn∈Z. On dit que la
fonctionfdéfinie surIest continue à droite (resp. à gauche) enx 0 , lorsque la restriction
defàI 1 ′(resp.I 2 ′) est continue enx 0

**Remarque 3.1.15** Sifadmet la même limite`à gauche et à droite enx 0 alors`est la
limite defenx 0.

**3.1. LIMITE ET CONTINUITÉ**

#### 3.1.3 Fonction continue

**Théorème 3.1.16** SoitE⊆R. AlorsEest un intervalle si et seulement siEpossède la
propriété suivante
∀x,y∈E,x < z < y⇒z∈E.

**Preuve :** La condition est nécessaire. Si, par exemple,E= [a,b[, les solutions

```
a≤x,y < betx < z < yimpliquenta≤z < betz∈E.
```

La condition est suffisante. SupposantEnon vide et non réduit à un seul, posons
a= infE≥−∞etb= supE≤+∞. Soita < z < b. Puisquez > a, il existex∈E
tel quez > x. De même, puiquez < b, il existey∈Etel quez < y. Mais alors
x < z < yet doncz∈E. 2

**Définition 3.1.17** Soitf:I→Rune fonction

1. On dit quefest continue ena∈Isifadmetf(a)comme limite ena. Autrement
   dit
   ∀ > 0 ,∃δ > 0 tel que∀x∈I,|x−a|< δ⇒|f(x)−f(a)|< .
2. On dit quefest continue surIsifest continue en tout point deI.
3. On dit quefest uniformément continue surIlorsque

```
∀ > 0 ,∀(x,x′)∈I^2 ,|x−x′|< δ⇒|f(x)−f(x′)|< .
```

Notons qu’une fonction uniformément continue surIest continue surI

**Définition 3.1.18 (Prolongement par continuité)** Soientf : I → Rune fonction
continue etg:J→RavecI⊂J. On dit quegest un prolongement par continuité def
si

```
1.gest un prolongement def(c’est-à-dire queg(x) =f(x)pour toutx∈I)
2.gest continue en tout point deJ.
```

**Proposition 3.1.19 (Critère séquentiel de continuité)** Soient une fonctionf:I→
Reta∈I. Alors les propriétés suivantes sont équivalentes :

```
1.fest continue ena.
```

2. Pour toute suite(xn)n∈Nà valeurs dansItelle quen→lim+∞xn=aon an→lim+∞f(xn) =
   f(a).

**3.1. LIMITE ET CONTINUITÉ**

**Preuve :** Supposonsfcontinue ena. Soit > 0. Il existeδ > 0 tel que|x−a|< δ
implique|f(x)−f(a)|< . Or(xn)n∈Ntend versa. Donc il existeN∈Ntel que si
n > Nalors|xn−a|< δ. Mais alors|f(xn)−f(a)|< . Donc la suite(f(xn))n∈Na
pour limitef(a). Pour montrer la réciproque, nous allons prouver la contraposée :
en supposant quefn’est pas continue enail s’agit de trouver une suite(xn)n∈N
qui converge versaet telle quen→lim+∞f(xn) 6 =f(a). Dire quefn’est pas continue

enase traduit par

```
∃ > 0 ,∀δ > 0 ,∃x∈I∩]a−δ,a+δ[avec|f(x)−f(a)|≥.
```

En prenant par exempleδ= 21 navecn∈N, la relation ci-dessus implique alors
qu’il existexn∈I∩]a− 21 n,a+ 21 n[tel que|f(xn)−f(a)| ≥. On construit ainsi
une suite(xn)n∈Nqui vérifie

```
|xn−a|<^1
2 n
```

##### (3.1)

et
|f(xn)−f(a)|≥ (3.2)

pour toutn∈N. Il vient alors de (3.1) que(xn)n∈Ntend versaalors que(f(xn))n∈N
ne tend pas versf(a)comme le montre (3.2) 2

**Théorème 3.1.20** Sif,g:I→Rsont continues enx 0 ∈I, alors

```
1.f+gest continue enx 0 ,
2.fgest continue enx 0 ,
```

3. Sig(x 0 ) 6 = 0,f/gest continue enx 0.
4. Sif(I)⊆Jet sih:J→Rest continue enf(x 0 ), alorsh◦fest continue enx 0

**Preuve :** Les trois énoncés découlent directement du théorème sur la limite d’une
somme, d’un produit et du quotient des suites convergences. Pour le quatrième,
considérons une suite(xn)n∈Nde points deIqui converge versx 0. La fonction
étant continue enx 0.

n→lim+∞f(xn) =f(x^0 ).
La fonctionhétant continue enf(x 0 ),

n→lim+∞h(f(xn)) =h(f(x^0 )).
2
Un ensembleE⊆Rest ouvert si à chaquex∈Ecorrespondδ > 0 tel que
]x−δ,x+δ[⊆E. Tout intervalle ouvert est un ensemble ouvert. Toute réunion
d’intervalles ouverts est un ensemble ouvert. Toute réunion d’ensembles ouverts
est un ensemble ouvert.

**3.1. LIMITE ET CONTINUITÉ**

**Théorème 3.1.21** L’image inverse d’un intervalle ouvert par une fonction continue sur
un intervalle ouvertf:]a,b[→Rest un ensemble ouvert

**Preuve :** Soit
x 0 ∈f−^1 (]c,d[) ={x∈]a,b[/f(x)∈]c,d[}

. On ac < f(x 0 )< d. Posons=min(d−f(x 0 ),f(x 0 )−c). La fonctionfétant
continue enx 0 , il existeδ > 0 tel que pour toutx∈]a,b[,|x−x 0 |< δimpliquent
|f(x)−f(x 0 )|< . Alors

```
c≤f(x 0 )− < f(x)< f(x 0 ) +≤d
```

et
]x 0 −δ,x 0 +δ[⊆f−^1 (]c,d[).
2
On applique souvent le théorème précédent de la façon suivante : sif:]a,b[→
Rest continue et sifest strictement positive enx 0 , il existe un intervalle ouvert
centré enx 0 dans lequelfreste strictement positive.

**Théorème 3.1.22 (théorème des valeurs intermédiaires)** Soitf : [a,b] → Rune
fonction continue telle quef(a)≤f(b). Alors pour touty∈[f(a),f(b)]il existex∈
[a,b]tel quef(x) =y

**Preuve :** Contruisons par récurrence les suites(an)et(bn)en posanta 0 = aet
b 0 =bet pouranetbncontruits, poser
{
an+1=anetbn+1=an+ 2 bn si f(an+ 2 bn)≥y
an+1=an+ 2 bnetbn+1=bn si f(an+ 2 bn)< y

Pour les suites(an)et(bn), nous avons

```
f(an)≤y≤f(bn)∀n∈N.
```

En effet, d’après l’hypothèse du théorème nous avonsf(a)≤ y≤ f(b), ce qui
montre que la relation est vraie au rangn= 0. Supposons la vraie au rangn∈N,
c’est-à-diref(an)≤y≤f(bn), et montrons qu’elle l’est aussi au rangn+ 1.

- Sif(an+ 2 bn) ≥ yalorsf(an+1) = f(an) ≤ y ≤ f(an+ 2 bn) = f(bn+1), soit
  f(an+1)≤y≤f(bn+1).
- Sif(an+ 2 bn) < yalorsf(an+1) = f(an+ 2 bn) < y ≤ f(bn) = f(bn+1), soit
  f(an+1)≤y≤f(bn+1).

**3.1. LIMITE ET CONTINUITÉ**

Donc nous avons dans tous les casf(an+1)≤ y≤f(bn+1). Par définition dean
etbnil est immédiat les suites(an)et(bn)sont adjacentes , car(an)est croissante,
(bn)décroissante etn→lim+∞(an−bn) = 0car

```
an+1−bn+1=an− 2 bn=...=a 2 n−+1b.
```

Les suites(an)et(bn)convergent par conséquent vers la même limite que nous
notonsxet on aan≤x≤bnpour toutn∈N. C’est-à-direx∈[a,b]. Commefest
continue sur[a,b], elle est continue enxet donc

```
n→lim+∞f(an) = limn→+∞f(bn) =f(x)
```

. Orf(an)≤y≤f(bn). Doncf(x) =y. 2

A partir de ce théorème et de la caractérisation des intervalles, nous avons le
résultat suivant :

**Théorème 3.1.23** L’image directe d’un intervalle par une fonction numérique d’une va-
riable réelle continue est un intervalle.

**Théorème 3.1.24** Soitf: [a,b]→Rune application continue sur un segment. Alorsf
a un maximun et un minimun sur[a,b].

**Preuve :** Il suffit de montrer le résultat pour le maximun (pour le minimun, on
prend−fà la place def). Montrons d’abord par l’absurde quefest majorée.
Supposons quefn’est pas majorée. Cela implique que pour tout entiernil existe
un réelx∈[a,b]tel quef(x)> n. Appelonsxncet élément. On a donc une suite
(xn)à valeurs dans le segment[a,b]. Par le théorème de Bolzano-Weierstrass, on
peut extraire une sous-suite convergente(yn)de la suite(xn). On obtient ainsi
une application strictement croissanteφ : N → Ntelle queyn = xφ(n). Donc
f(yn) =f(xφ(n))> φ(n)≥n, ce qui implique que la suitef(yn)tend vers+∞.
Notons`= limn→+∞yn. Commefest continue on an→lim+∞f(yn) =f(`), ce qui contre-

ditn→→lim+∞f(yn) = +∞. Doncfest majorée etsup[a,b]fexiste. Soit M cette borne

supérieure. Il suffit alors de montrer qu’il existex∈[a,b]tel quef(x) =M. Soit
nun entier. Par définition de la borne supérieure,M− 21 nn’est pas un majorant
des valeurs def, donc il existexn ∈[a,b]tel queM− 21 n < f(xn)≤ M. On a
donc une suite(xn)dans[a,b]. par le théorème de Bolzano-Weierstrass, il existe
une sous-suite convergente(yn)de(xn)avecyn=xφ(n)oùφ:N→Nest une ap-
plication strictement croissante. Soitxla limite de la suite(yn). On a les inégalités
M− 21 n ≤M− 2 φ^1 (n) < f(yn)≤M. Par le théorème des gendarmes (théorème

**3.1. LIMITE ET CONTINUITÉ**

2.1.16) on conclut que la suite(f(yn))tend versM. Commefest continue, on a
aussi

n→lim+∞f(yn) =f(x).
Finalement on obtientf(x) =M. 2

**Théorème 3.1.25** Soitf:R→Rune fonction continue telle que

```
x→lim+∞f(x) = limx→−∞f(x) = 0.
```

S’il existe un pointx−oùf(x−)< 0 ,fatteint une valeur minimun finie quelque part
surRet s’il existe unpointx+oùf(x+)>0,fatteint une valeur maximun finie quelque
part surR.

**Preuve :** Vérifions le deuxième énoncé (la vérification du prémier est analogue).
Soitx 0 >|x+|tel que|x|> x 0 impliquef(x)> f(x+)/ 2. L’intervalle[−x 0 ,x 0 ]étant
fermé borné, la fonctionyatteint son maximun : il existexM∈[−x 0 ,x 0 ]tel que

```
f(xM) = sup{f(x)/x∈[−x 0 ,x 0 ]}
```

. Mais puisquesup{f(x)/x∈[−x 0 ,x 0 ]} ≥f(x+)> f(x)pour toutxtel que|x|>
x 0 , on a en faitsup{f(x)/x∈[−x 0 ,x 0 ]}= sup{f(x)/x∈R}. 2

Une fonctionf :I→Rest injective si pour toutx 1 ,x 2 ∈If(x 1 ) =f(x 2 )im-
pliquex 1 =x 2. Une telle fonction établit donc une bijection entre son domaineI
et son imagef(I)(qui est un intervalle sifest continue ). Elle admet une fonction
inversef−^1 ,f−^1 :f(I)→I, définie par la relationf−^1 (f(x)) =x.

**Théorème 3.1.26** une fonction continuef:I→Rest injective si et seulement si elle
est strictement monotone.

**Preuve :** La condition est évidemment suffisante. Pour montrer qu’elle est néces-
saire, supposons par exemple que l’on aitf(x 1 )< f(x 2 )pour deux pointsx 1 < x 2
et montrons que l’on af(x 3 )< f(x 4 )quels que soientx 3 < x 4. Considérons pour
cela la fonction continueg: [0,1]→Rdéfinie par

```
g(t) =f((1−t)x 1 +tx 3 )−f((1−t)x 2 +tx 4 ).
```

On ag(0) =f(x 1 )−f(x 2 )< 0 etg(1) =f(x 3 )−f(x 4 ). Si l’on avaitg(1) = 0, on
devrait avoirx 3 =x 4 ce qui est exclu. Si on avaitg(1)> 0 , on pourrait trouver
s∈]0,1[tel queg(s) = 0. Alors, il faudrait avoir(1−s)x 1 +sx 3 = (1−s)x 2 +sx 4 ,
c’est-à-dire 0 >(1−s)(x 1 −x 2 ) =s(x 4 −x 3 )> 0 ce qui est absurde. Finalement,
on a bieng(1)< 0. 2

### 3.2 Fonctions dérivables

**Théorème 3.1.27** Soitf:I→Rune fonction continue strictement monotone. Alors la
fonction inversef−^1 :f(I)→Rest continue.

**Preuve :** Supposons par exemplefstrictement croissante. Alorsf−^1 est aussi stric-

tement croissante. SoientJ =f(I)etX 0 =f(x 0 )∈

```
◦
J,x 0 ∈
```

◦
I(éventuellement, on
peut avoirX 0 =A= f(a)ouX 0 = B=f(b)mais ces cas se traitent de façon
similaire). Soit > 0. posons

```
δ= inf{f(x 0 )−f(x 0 −),f(x 0 +)}
```

. SiX 0 −δ < X < X 0 +δ, on a

```
f−^1 (X 0 −δ)< f−^1 (X)< f−^1 (X 0 +δ)
```

. Commef(x 0 −)≤X 0 −δetX 0 +δ≤f(x 0 +), on a aussi

```
f−^1 (f(x 0 −))< f−^1 (X)< f−^1 (f(x 0 +))
```

c’est-à-dire
x 0 − < f−^1 (X)< x 0 +.

ou encoref−^1 (X 0 )− < f−^1 (X)< f−^1 (X 0 ) + 2

### 3.2 Fonctions dérivables

```
Idésigne toujours un intervalle deR.
```

#### 3.2.1 Généralité sur les fonctions dérivables

```
Soientf:I→Rune fonction eta∈I.
```

**Définition 3.2.1** On dit quefest dérivable enasi la limite

```
xlim→af(xx)−−fa(a)
```

existe et est finie. On notef′(a)cette limite.

La dérivéef′(a)defenadonne la pente de la tangente au point(a,f(a))au
graphe def. Notons que sifest dérivable enx 0 , en posantr(x) =f(x)−f(x 0 −
(x−x 0 )f′(x 0 ), on a
{
f(x) =f(x 0 ) + (x−x 0 )f′(x 0 ) +r(x)
xlim→x 0 xr−(xx)^0 = 0 (3.3)

**3.2. FONCTIONS DÉRIVABLES**

**Proposition 3.2.2** Soientf : I → Reta ∈ I. Sif est dérivable ena, alorsf est
continue ena.

**Preuve :** Soit`= limx→af(xx)−−fa(a). Comme la fonctionx7→xest continue ena, on a

xlim→a(x−a) = 0. D’où en utilisant la propriété des limites par rapport au produit

```
xlim→a(f(x)−f(a)) = limx→a
```

##### [

```
f(x)−f(a)
x−a
```

```
(x−a)
```

##### ]

```
= limx→af(xx)−−fa(a)xlim→a(x−a) =`·0 = 0
```

Doncxlim→af(x) =f(a)etfest bien continue ena. 2

**Remarque 3.2.3** 1. La réciproque n’est pas toujours vraie, comme le prouve l’exemple
f(x) =|x|enx= 0. En effet on a

```
xlim→ 0
x > 0
```

```
f(x)−f(0)
x− 0 = limx→ 0
x > 0
```

```
|x|
x = 1
```

```
et
```

```
xlim→ 0
x < 0
```

```
f(x)−f(0)
x− 0 = limx→ 0
x > 0
```

```
|x|
x =−^1
```

```
Doncfn’est pas dérivable en 0.
```

2. Il existe même des fonctions continues qui ne sont dérivables en aucun point de leur
   domaine de définition.

**Proposition 3.2.4** Soitf:I→Rune fonction admettant un extremun local ena. Sif
est dérivable ena, alorsf′(a) = 0.

**Preuve :** Supposons que l’extremun est un maximun (le cas du minimun se traite
en remplacantfpar−f). Alors par définition il existe un intervalle ouvertα > 0
tel que pour toutx∈ ∩]a−α,a+α[on af(x)≤f(a). Six > a, on ax−a > 0 et
f(x)−f(a)≤ 0 , doncf(xx)−−fa(a)≤ 0 et par passage à la limite on obtientf′(a)≤ 0.
Six < a, on ax−a < 0 etf(x)−f(a)≤ 0 , doncf(xx)−−fa(a)≥ 0 et par passage à la
limite on obtientf′(a)≥ 0. En conbinant les deux inégalités on obtientf′(a) = 0
2

**Définition 3.2.5 (Fonction dérivée.)** Sif :I →Rest dérivable en tout point deI,
alorsfest dérivable surIet on définit sa fonction dérivéef′par

```
f′: I → R
x 7→ f′(x)
```

**3.2. FONCTIONS DÉRIVABLES**

**Proposition 3.2.6** Soientfetgdeux fonctions définies surI.

1. Sifetgsont dérivables surI, alorsf+getfgsont dérivables surIet

```
(f+g)′=f′+g′et(fg)′=f′g+fg′
```

2. Sifne s’annule pas surI, alorsf^1 est dérivable surIet

##### (^1

```
f
```

```
)′=−f
```

```
′
f^2
```

**Preuve :**

1. Le cas de l’addition résulte facilement du résultat concernant l’addition des
   limites. Pour le produit, on écrit

```
f(x)g(x)−f(a)g(a) = (f(x)−f(a))g(x) +f(a)(g(x)−g(a)).
```

```
On divise par(x−a)et on passe à la limite quandxtend versace qui donne
le résultat grâce aux propriétés des limites de produit et de sommes. De plus
on sait queg(x)tend versg(a)par la continuité deg.
```

2. Pour l’inverse, on écrit

```
(f(^1 x)−f(^1 a))x−^1 a=−f(xx)−−fa(a)f(^1 x)f(^1 a)
```

```
qui a un sens pour|x−a|assez petit. Quandxtend versa,f(x)tend vers
f(a), carfest continue. On obtient alors la formule désirée.
```

2

**Proposition 3.2.7 (Dérivée de la composée de deux fonctions)** Soientf :I →R
etg:J →Rdeux fonctions telles quef(I)⊂J(pour toutx∈Ion af(x)∈J). Sif
est dérivable ena∈Ietgest dérivable enf(a)∈J, alors la composéeg◦f:I→Rest
dérivable enaet(g◦f)′(a) =g′(f(a))·f′(a)

**Preuve :** Soita∈I. Par définition de la dérivée, on a

```
(g◦f)′(a) = limx→ag(f(x))x−−ga(f(a)).
```

Distinguons deux cas :

**3.2. FONCTIONS DÉRIVABLES**

1er cas :f′(a) 6 = 0, on af(x)−f(a) 6 = 0en tous les points deIqui sont dans un
intervalle ouvert contenanta. C’est-à-dire qu’il existeα > 0 tel quef(x) 6 =f(a)
pour toutx∈(]a−α,a+α[∩I)\{a}. On peut écrire alors

```
limx→ag(f(x))x−−ga(f(a)) = limx→ag(ff(x(x)))−−gf((fa()a))·f(xx)−−fa(a)
```

```
= limx→ag(ff(x(x)))−−gf((fa()a))·limx→af(xx)−−fa(a).
```

Le premier est la composée des fonctionsx7→f(x)ety7→g(yy)−−gf((fa()a)).Commef
est continue,f(x)tend versf(a). Commegest dérivable enf(a), on a

```
y→limf(a)g(yy)−−gf((fa()a))=g′(f(a)).
```

En composant, on trouve

```
xlim→ag(ff(x(x)))−−gf((fa()a))=g′(f(a)).
```

D’où la formule de la proposition.
2ième casf′(a) = 0. Il faut montrer que

```
limx→ag(f(x))x−−ga(f(a))= 0.
```

Soit > 0.
Il existe d’après (3.3)δg> 0 tel que

```
|g(y)−g(f(a))|<(1 +|g′(f(a))|)|y−f(a)|
```

dès quey∈Jsatisfait la relation|y−f(a)|< δgetδf> 0 tel que

```
|f(x)−f(a)|<1 +|g′(f(a))||x−a|
```

dès quex∈Isatisfait la relation|x−a|< δf. Alors, six∈Isatisfait la relation

```
|x−a|<inf
```

##### {

```
δf,δg1 +|g
```

```
′(f(a))|

```

##### }

on a
|g(f(x))−g(f(a))|<(1 +|g′(f(a))|)|f(x)−f(a)|< |x−a|
2

**Proposition 3.2.8 (Dérivée de la fonction réciproque)** Soitf : I → J, oùI etJ
sont deux intervalles deRaveca∈I. Sifest inversible,f−^1 est dérivable enf(a)si et
seulement sif′(a) 6 = 0auquel cas(f−^1 )(f(a)) =f′^1 (a)

**3.2. FONCTIONS DÉRIVABLES**

**Preuve :** La condition est nécessaire puisque sif−^1 est dérivable enf(a), la fonc-
tion composéef−^1 (f(x))sera dérivable enaet l’on aura1 = (f−^1 )(f(a))f′(a). Elle
est aussi suffisante puisque si elle est satisfaite, on a

```
x→limf(a)f
```

− (^1) (X)−f− (^1) (f(a))
X−f(a) = X→limf(a)

##### 1

```
X−f(a)
f−^1 (X)−a
= limx→af(x)^1 −f(a)
x−a
```

```
=f′^1 (a).
```

2

#### 3.2.2 Propriété des fonctions dérivables

**Théorème 3.2.9 (théorème de Rolle)**. Soitf: [a,b]→Rune fonction continue sur
[a,b]et dérivable sur]a,b[telle quef(a) =f(b). Alors il existec∈]a,b[tel quef′(c) = 0.

**Preuve :** Commefest continue sur un segment,fadmet un maximun et un mini-
mun d’après le théorème 3.1.24. SoitM = max[a,b]fetm= min[a,b]f. Sim 6 =f(a)
ouM 6 = f(a)il existe unc∈]a,b[tel quefpossède un extremun enc. On sait
alors quef′(c) = 0d’après la proposition 3.2.4. Sinon on am =f(a) =f(b)et
M=f(a) =f(b). Doncfest constante sur[a,b]etf′(c) = 0pour toutc∈]a,b[. 2

**Théorème 3.2.10 (théorème des accroissements finis)** Soitf: [a,b]→Rune fonc-
tion continue sur[a,b]et dérivable sur]a,b[. Alors il existec ∈]a,b[tel quef′(c) =
f(b)−f(a)
b−a

**Preuve :** Considérons la fonction auxiliaireφ(x) =f(x)−f(a)−(x−a)f(b)b−−fa(a)
On aφ(a) =φ(b) = 0. La fonctionφest continue sur[a,b]et dérivable sur]a,b[.
D’après le théorème de Rolle, il existec∈]a,b[tel queφ′(c) = 0. Commeφ′(x) =
f′(x)−f(b)b−−fa(a)on obtient bien la formule annoncée en posantx=c 2

**Proposition 3.2.11** Soitf:I→Rune fonction dérivable sur l’intervalleI. Alors :

```
1.fest constante si et seulement sif′(x) = 0pour toutx∈I.
2.fest croissante (resp. décroissante) si et seulement sif′(x)≥ 0 (resp.f′(x)≤ 0 )
pour toutx∈I.
```

3. Sif′(x)> 0 (resp.f′(x)< 0 ) pour toutx∈I, alorsfest strictement croissante
   (resp. décroissante).

**Preuve :**

**3.2. FONCTIONS DÉRIVABLES**

1. Sifest constante, sa dérivée est nulle. Réciproquement, soienta,b∈Iavec
   a < b. On applique le théorème des accroissements finis à la fonctionfsur le
   segment[a,b]: il existe unc∈]a,b[tel quef(b)−f(a) =f′(c)(b−a). Comme
   f′est nulle, on obtientf(b) =f(a). Par conséquentfest constante.
2. Sifest croissante, on af(x)≥f(a)pourx > aet alors(f(x)−f(a))/(x−a)≥ 0. De même six < a, on af(x)≤f(a)et(f(x)−f(a))/(x−a)≥ 0. Comme les
   égalités passent à la limite, en faisant tendrexversaon voit quef′(a)≥ 0.
   Réciproquement ; on procède comme dans la première partie : on obtient
   f(b)−f(a) =f′(c)(b−a). Doncf(b)−f(a)≥ 0 sib > aetf(b)−f(a)≤ 0 si
   b < a. Doncfest croissante. On traite le casfdécroissante en remplacantf
   par−f.
3. Pareil que pour2)sauf qu’on a des inégalités strictes.

2

**Théorème 3.2.12 (Inégalité des accroissements finis.)** Soientfetgdeux fonctions
définies sur le segment[a,b], aveca < b. On suppose :

```
1.fetgcontinues sur[a,b]et dérivables sur]a,b[
2.|f′(x)|≤g′(x)pour toutx∈]a,b[.
```

Alors
|f(b)−f(a)|≤g(b)−g(a)

**Preuve :** Puisque|f′(x)|≤g′(x)pour toutx∈]a,b[, on af′(x)≤g′(x)et−f′(x)≤
g′(x)pour toutx∈]a,b[, soit(f−g)′(x)≤ 0 et(f+g)′(x)≥ 0 pour toutx∈]a,b[.
Il vient quef −gest décroissante sur[a,b]tandis quef+gy est croissante.
Ora < b. Donc(f−g)(a)≥(f−g)(b)et(f+g)(a)≤ (f+g)(b), c’est-à-dire
f(b)−f(a)≤g(b)−g(a)etf(a)−f(b)≤g(b)−g(a). D’où|f(b)−f(a)|≤g(b)−g(a)
2

**Corollaire 3.2.13** Soitf une fonction continue sur le segment[a,b]et dérivable sur
]a,b]. Sif′admet une limite`ena, alorsfest dérivable enaetf′(a) =`

**Preuve :**

xlim→af′(x) =`⇔∀,∃c∈]a,b],∀x∈]a,c],|f′(x)−`|< 
fétant continue sur[a,c]et dérivable sur]a,c]on peut appliquer l’inégalité des
accroissements finis, sur[a,c], à la fonctiong(x) =f(x)−`x:

```
∀x∈[a,c],|f(x)−f(a)−`(x−a)|≤(x−a)
```

**3.2. FONCTIONS DÉRIVABLES**

et donc,

```
∀ > 0 ,∀x∈]a,c],
```

##### ∣∣

```
∣∣f(x)−f(a)
x−a
```

##### −`

##### ∣∣

##### ∣∣< 

. Ainsi,fest dérivable enaet sa dérivée estf′(a) =` 2

**Lemme 3.2.14** Soientfetgdeux fonctions continues sur[a,b]et dérivables sur]a,b[
telles queg′ne s’annule pas sur]a,b[. On suppose de plus queg(a) 6 =g(b). Il existeξ
dans]a,b[tel quefg((bb))−−fg((aa))=fg′′((ξξ))

**Preuve :** Considérons la fonctionφdéfinie sur[a,b]parφ(x) =f(x)−f(a)−
f(b)−f(a)
g(b)−g(a)(g(x)−g(a)). On aφ(a) =φ(b) = 0. La fonctionφest continue sur[a,b]
et dérivable sur]a,b[. D’aprèsle théorème de Rolle, il existeξdans]a,b[tel que
φ′(ξ) = 0, ce qui donnef′(ξ)−fg((bb))−−fg((aa))g′(ξ) = 0. On en déduitfg((bb))−−fg((aa))=fg′′((ξξ)) 2

**Proposition 3.2.15 (Règle de l’Hospital)** Soientfetgdeux fonctions définies sur un
intervalleI, dérivables dans un voisinage pointé deα∈I; c’est-à-dire dansV(α)\{α},
oùV(α) =]α−r,α+r[∩Ipour un certainr > 0. On suppose quefetgadmettent en
αtoutes deux la même limite nulle ou toutes deux des limites infinies. Alors sifg′′possède
une limite`enα, il en est de même defg, et l’on axlim→αfg′′((xx))= limx→αfg((xx))

**Preuve :** L’existence de la limite defg′′suppose qu’il existe un voisinage pointé de
αdans lequelg′ne s’annule pas. Soit doncV′(α)un tel voisinage

```
1.fetgtendent vers 0. Les fonctionsfetgse prolongent par continuité en
αpar la valeur 0 , etgest strictement monotone surV(α). D’après lemme
3.2.14 appliquée dans l’intervalle de bornesαetxoùxappartient àV′(α),
il existeξ(x)compris entreαetxtel quefg((xx))=fg′′((ξξ((xx)))). Lorsquextend vers
α, il en est de même deξ(x)et doncxlim→αf
```

```
′(ξ(x))
g′(ξ(x))=`. Alors, on a également,
xlim→αfg((xx))=`.
2.fetgtendent vers l’infini. Quitte à changer les signes defetg, on peut sup-
poser quefetgtendent vers+∞enα. Il existe alors un voisinage épointé
deαsur lequelfetgne s’annulent pas.
```

- Supposons ‘`fini. Soit > 0. Il existe un voisinageV′(α)tel que, pour tout
  xde cet intervalle

##### ∣∣

```
∣f
```

```
′(x)
g′(x)−`
```

##### ∣∣

```
∣< 2 Soit alorsafixé dansV 1 ′(α). Commegest
strictement monotone, pour toutxcompris strictement entreaetα, on a
g(x) 6 =g(a). On peut donc appliquer le lemme 3.2.14 dans l’intervalle de
bornes∣ xeta. Il existeξ(x,a)compris entreaetx, donc dansV 1 ′(α), tel que
∣∣f(x)−f(a)
g(x)−g(a)
```

##### ∣∣

```
∣= f
```

```
′(ξ(x,a))
g′(ξ(x,a))et alors
```

##### ∣∣

```
∣fg((xx))−−fg((aa))−`
```

##### ∣∣

##### ∣ =

##### ∣∣

```
∣f
```

```
′(ξ(x,a))
g′(ξ(x,a))−`
```

##### ∣∣

```
∣ <  2. Posons
```

**3.2. FONCTIONS DÉRIVABLES**

```
η(x) =^1 −
gg((ax))
1 −ff((ax)). On a alorsxlim→αη(x) = 1. On peut écrire
∣∣
∣∣f(x)
g(x)−`
```

##### ∣∣

##### ∣∣ =

##### ∣∣

```
∣∣η(x)f(x)−f(a)
g(x)−g(a)−`
```

##### ∣∣

##### ∣∣

```
≤ η(x)
```

##### ∣∣

```
∣∣f(x)−f(a)
g(x)−g(a)−`
```

##### ∣∣

```
∣∣+|`(1−η(x))|
```

```
≤ η(x)
2
```

```
+|`(1−η(x))|
```

. Mais, le membre de droite tend vers 2  lorsquextend versα. Il existe
donc un voisinage épointéV 2 ′(α)dans lequel

```
η(x) 2 +|`(1−η(x))|< .
```

```
Ce qui donne
```

##### ∣∣

```
∣fg((xx))−`
```

##### ∣∣

```
∣< . Il en résulte que
```

```
xlim→αfg((xx))=`.
```

- Supposons`infinie. Commefg′′tend vers l’infinie,f′ne s’annule pas dans
  un voisinage épointé deαet on applique ce qui précède à gf′′ qui tend
  vers 0. Il en résulte quegftend vers 0 , et puisquegne s’annule pas, on en
  déduit quefgtend vers 0.

2

**Exemple 3.2.16**

1. Soitp(x) =a 0 +a 1 x+...+anxnun polynôme de degrén. Calculonsxlim→∞pe(xx). Il
   suffit de déterminerxlim→∞xekkpourk∈ 0 , 1 ,...,n. Or(xk)(`)(x) =k(k−1)...(k−
`+ 1)xk−lpour tout`≤ket(ex)(`)=exnous avonsx→lim+∞(xk)(`)(x) = +∞et

```
x→lim+∞(ex)(`) = +∞pour` < k. D’oùx→lim+∞xekx = limx→+∞ekx! = 0. C’est ainsi que
x→lim+∞pe(xx)= 0
```

2. Calculerxlim→ 01 −cos

```
x 2
1 −cosx. En posantf(x) = 1−cos
```

```
x
2 etg(x) = 1−cosxon af(0) =
g(0) = 0etfetgsont dérivable en 0 avecf′(0) = 0etg′(0) = 0carf′(x) =^12 sin 2x
etg′(x) = sinx. Les fonctions dérivées étant aussi dérivables en 0 on passe à 1
dérivée seconde .f′′(x) =^14 cosx 2 etg′′(x) = cosx. D’où
```

```
limx→ 0
```

```
1 −cosx 2
1 −cosx= limx→^0
```

```
1
2 sin
```

```
x
2
sinx = limx→^0
```

```
1
4 cos
```

```
x
2
cosx =
```

##### 1

##### 4

### 3.3 Exercices

### 3.3 Exercices

**Exercice 16** Montrer que toute fonction croissantefdeI = [a,b]dansI, admet au
moins un point fixe, c’est-à-dire qu’il existe un réelαdansItel quef(α) =α.

**Correction 16** L’ensemble :

```
E={x∈[a,b]|f(x)≤x}
```

est non vide (f(a)∈[a,b]entraînef(a)≥ a) majoré parb; il admet donc une borne
supérieureα∈[a,b].
Siα=aalorsf(x)< xpour toutx∈I\{a}et pourn 0 ∈N∗tel quea+n^10 < bon
a, du fait de la croissance defsurI:

```
∀n≥n 0 ,a≤f(a)≤f(a+n^1 )< a+n^1
```

qui par passage à la limite quandntend vers l’infini donnea=f(a).
Siα > a, par définition de la borne supérieure, on peut trouver pour tout entier
naturel non nulnun réelxn∈

##### ]

```
α−n^1 ,α
```

##### ]

```
∩Eet :
```

```
∀n≥ 1 ,f(α)≥f(xn)≥xn> α−n^1
```

qui par passage à la limite quandntend vers l’infini donnef(α)≥α, c’est-à-dire queα
est dansE.
Siα=balorsα≤f(α)≤b=αetα=f(α). Siα < b, pournassez grand on a
α≤f(α)≤f(α+n^1 )< α+n^1 qui par passage à la limite donneα=f(α). En définitive
αest un point fixe defdansI.

**Exercice 17** On considère les fonctionsf :x7→x−Arctan(lnx)etu:x7→x(1 +
(lnx)^2 )définies sur]0,+∞[.

1. Justifier que ces deux fonctions sont infiniment dérivables sur]0,+∞[.
2. (a) Calculer les limites deu(x)lorsquextend vers 0 par valeurs supérieures et
   ensuite lorsquextend vers+∞. Montrer queuse prolonge par continuité
   sur[0,+∞[.
   (b) Calculer la dérivée deusur]0,+∞[.
   (c) Montrer que le graphe du prolongement deuà[0,+∞[admet en 0 une tan-
   gente verticale.
   (d) Dresser le tableau des variations deusur[0,+∞[.
   (e) Montrer que l’équationu(x) = 1admet une unique solution que l’on déter-
   minera. On la noteα.

**3.3. EXERCICES**

3. (a) Calculer les limites def(x)quandxtend vers 0 par valeurs supérieures et
   vers+∞. En déduire quefse prolonge par continuité sur[0,+∞[.
   (b) Calculer la dérivée defsur]0,+∞[et exprimer la en fonction deu.
   (c) Dresser le tableau des variations defsur[0,+∞[.

```
(d) Montrer quefest une bijection deI 1 = [0,α]dansI 2 =
```

##### 

```
α,lim
x→ 0
x > 0
```

```
f(x)
```

##### 

##### .

4. (a) Soitx < y < α. A l’aide du théorème des accroissements finis appliqué àf
   sur[x,y], montrer que

```
f′(x)≤f(xx)−−fy(y)≤f′(y)
```

```
(b) En déduire que pour touty < αon a
f(y)−π 2
y
```

```
≤f′(y).
```

```
(c) Montrer enfin que le graphe du prolongement def à[0,+∞[admet en0+
une tangente verticale.
```

5. On notegla fonction réciproque def:I 1 →I 2. Donner le domaine de dérivabilité
   deg.

**Correction 17** On considère les fonctionsf:x7→x−Arctan(lnx)etu:x7→x(1 +
(lnx)^2 )définies sur]0,+∞[.

1. La fonctionx7→lnxest indéfiniment dérivable sur]0,+∞[et la fonctionx7→
   Arctanxindéfiniment dérivable surR, donc la composéex7→ Arctan(lnx)est
   indéfiniment dérivable sur]0,+∞[. Par suitefest indéfiniment dérivable comme
   somme des fonctionsx7→xetx7→Arctan(lnx)qui sont indéfiniment dérivable
   sur]0,+∞[. De même puisquex7→x^2 est indéfiniment dérivable surR, la composé
   x7→1 + (lnx)^2 est indéfiniment dérivable etuest indéfiniment dérivable comme
   le produit de deux fonctions indéfiniment dérivables.
2. (a) Calcule des limites deu(x):

```
xlim→0+u(x) = limx→0+x(1 + (lnx)^2 ) = limx→0+x+ (
```

##### √

```
xlnx)^2 = 0
```

```
carlimx→ 0 xαlnx= 0pour toutα > 0.
```

```
x→lim+∞u(x) = limx→+∞x(1 + (lnx)^2 ) = +∞
Puisqueuest continue sur]0,+∞[et sa limite en 0 par valeurs supérieurs
existe et est finies, elle est prolongeable par continuité sur[0,+∞[.
```

**3.3. EXERCICES**

```
(b) Dérivée deusur]0,+∞[.u′(x) = (1+(lnx)^2 )+x(2lnxx) = 1+(lnx)^2 +2 lnx
(c) Montrons que le graphe du prolongement deuà[0,+∞[admet en 0 une
tangente verticale. Pour celà il faut montrer quelimx→0+u(x)−xu(0)=∞. En
effet, nous avonsu(x)−xu(0)= 1 + (lnx)^2 qui tend vers+∞lorsquextend vers
0 par valeurs positives.
(d) Tableau des variations deusur[0,+∞[. Puisque queu′(x) = (1 + lnx)^2 ≥ 0 ,
la fonctionuest croissante. Donc
(e) La fonctionuétant continue et strictement croissante de 0 à+∞, l’équation
u(x) = 1admet une unique solution dans[0,+∞[.
```

**Exercice 18** On considère la fonction réelle de variablexréelle :

```
f(x) =xe(^1 −^1 x)pourx≥ 0.
```

1. Déterminer le domaineDfde définition def.
2. Calculer les limites defà la frontière deDf.
3. Déterminer le domaine de définition de la fonctionf′(indiquer les éventuels points
   où la fonctionfn’est pas dérivable). Donner l’expression def′(x).
4. Etudier la croissance et décroissance def.
5. Déterminer les éventuels asymptotes verticaux et horizontaux. Donner l’équation
   de l’asymptote oblique sous la formey=cx+d, avecc,d∈R.
6. Tracer le graphique de la fonctionfsur le plan Cartesien en accord avec les résultats
   obtenus pour les étapes données ci-dessus.

**Exercice 19** A l’aide du théorème des accroissements finis, montrer que pour tousa,b∈
R+, tels quea < b,

```
1
1 +b^2 ≤
```

```
Artan(b)−Artan(a)
b−a ≤
```

##### 1

```
1 +a^2
```

# Chapitre 4

# Developpement limité

### 4.1 Fonctions négligeables

```
Soita∈R=R∪{−∞,+∞}etDune partie deRtelle que
```

- a∈Dsia∈R,
- il existeα > 0 tel que[α,+∞[⊂Dsia= +∞,
- ilexisteβ < 0 tel que]−∞,β]⊂Dsia=−∞
  Les fonctionsf,g ...sont définies surDà valeurs dansR. Un sous-ensembleV
  deDest voisinage pointé deasi
- il existeδ > 0 tel que]a−δ,a+δ[∩D\{a}⊂Vsia∈R
- il existeM∈Rtel que]M,+∞[∩D⊂Vsia= +∞
- il existeM∈Ravec]−∞,M[∩D⊂Vsia=−∞,
  Pour ne pas trop alourdir les notations, on convient qu’une égalité entre fonctions
  sous-entend la restriction à l’intersection des domaines de définition.

**Définition 4.1.1** La fonctionf est dite négligeable devantgau voisinage dea, si et
seulement s’il existe un voisinage pointéVdeaet une fonction:V →Rde limite nulle
ena, telle quef=·g(dansV). On écrit

```
fa g⇔f=a o(g)d⇔ ∃ ́ef :V →Rtel quef=·getlimx→a(x) = 0.
```

L’écrituref=o(g)est la notation de Landeau etfgla notation de Hardy.

**Exemple 4.1.2** 1. On a
f=a o(1)⇔limx→af(x) = 0
.

2. La fonction nullex7→ 0 est négligeable devant toute fonction en tout pointa(prendre
   = 0). D’autre part,f = o(f)⇒f =·f ⇔(1−)f =o⇒f = o(car
   lim= 0⇒(1−) 6 = 0) dans le voisinage dea.

### 4.2 Fonctions équivalentes

**Remarque 4.1.3** Alors que la notation de Hardy paraît plus "logique", on utilise dans
la pratique plus souvent celle de Landeau, car elle permet l’abus de notation très pratique
qui consiste à écrire

```
f(x) =g(x) +o(h(x))(x→a)au lieu def−g=a o(h).
```

Lorsqu’on utilise cette notation, chaque termeo(h(x))représente une fonction quelconque
dex, négligeable devanth, mais à priori inconnue et différente d’un éventuel autre terme
o(h(x)). On prendra aussi garde de toujours préciser le point auquel la la relation de
négligence s’applique.

**Exemple 4.1.4** 1. Sifest bornée etgtend vers l’infini, alorsf(=a)o(g).

2. On axm=∞o(xn)si et seulement sim < n(car alors=xm−n→ 0 ), et l’opposé
   au voisinage de 0.
3. On axα(=∞)o(eβx)et(lnx)α(=∞)o(xβ)(x→∞)pour toutα,β > 0.

La proposition suivante permet de trouver autant d’exemples que l’on souhaite :

**Proposition 4.1.5** Si la fonctionf/gest définie dans un voisinage pointé dea, alors
f=a o(g)⇔xlim→afg((xx))= 0.

**Preuve :** Exercice. (Il suffit d’utiliser=f/g). 2

```
Notons que :
```

- La relationest transitive ; c’est-à-direfa g,ga h⇒fa h,
- Compatible avec la multiplication, c’est-à-direfa g⇒f·ha g·het

##### 

##### 

##### 

```
fa g
ha k
```

##### 

##### 

##### ⇒

```
f·ha g·kpour toutes fonctionsf,g,h,k:V→R.
la relationn’est pas compatible avec l’addition! Par exemple,x∞ x^3 et
```

x^2 ∞ −x^3 , mais on n’a pasx+x^2 x^3 + (−x^3 ) =o. Dans la pratique, on utilise

donc la notationo(g)(voireo(g(x))) pour représenter une fonctionfquelconque,
à priori inconnue, telle quefg. On écrit ainsi par exemplexno(xm) =o(xn+m),
o(xn) +o(xm) =o(xmax(m,n))(x→∞)...

### 4.2 Fonctions équivalentes

**Définition 4.2.1** On dit quefest équivalent àgau voisinage deassif−gest négli-
geable devantg: on écritf∼a g⇐⇒f−ga g

### 4.3 Développement limité : Définition et propriétés

**Proposition 4.2.2** Sif/gest défini dans un voisinage pointé dea, alorsf ∼ g⇐⇒
limf/g= 1.

**Preuve :** Exercice(utiliser la déf. pourm.q.f= (1 +))g 2

```
Notons que la relation∼est :
```

- une relation d’équivalence, car elle est
  
  
  

```
refflexivef∼f
symétriquef∼g⇒g∼f
transitivef∼getg∼h⇒f∼h
.
```

**Proposition 4.2.3 (limites.)** Sif ∼ g, alorslimgexiste ssilimf existe, et si elles
existent, ces deux limites sont égales.

**Proposition 4.2.4 (produit, quotient, puissance.)** On peut prendre le produit , quo-
tient (lorsqu’il est défini) et une puissance quelconque d’équivalences. Dans le cas général,
on ne peut additionner des équivalences.

**Proposition 4.2.5 (composée.)** Soitf ∼a getφ : I →Rtel quelimbφ= aalors
f◦φ∼b g◦φ.

### 4.3 Développement limité : Définition et propriétés

#### 4.3.1 Développement limité d’ordre n en x 0

**Définition 4.3.1** Soientf:I →Retx 0 ∈I. On dit quefadmet un développement
limité d’ordrenau voisinage dex 0 (en abrégéDLn(x 0 )) si et seulement s’il existen+ 1
réelsa 0 ,a 1 ,...,antels que pour toutx∈I

```
f(x) =a 0 +a 1 (x−x 0 ) +a 2 (x−x 0 )^2 +...+an(x−x 0 )n+ (x−x 0 )n(x)
```

etxlim→x 0 (x) = 0.

On appelle alors le polynômeP(x−x 0 ) =a 0 +a 1 (x−x 0 ) +a 2 (x−x 0 )^2 +...+
...+an(x−x 0 )nla partie régulière duDL, et(x−x 0 )n(x)le reste d’ordren, que
l’on note aussio((x−x 0 )n).

**Exemple 4.3.2 (fondamental.)** Soitf:]− 1 ,1[→Rdéfinie parf(x) = 1 −^1 x. On a

```
f(x) = 1 +x+x^2 +x^3 +x^31 −xx.
```

Doncfadmet unDL 3 (0)de partie régulièreP(x) = 1 +x+^2 +x^3 et de resteo(x^3 ) =
x^3 (x) =x^31 −xx.

**4.3. DÉVELOPPEMENT LIMITÉ : DÉFINITION ET PROPRIÉTÉS**

Un développement limité est une stricte égalité mathématique, il ne faut donc
jamais "oublier" le reste en faveur de la partie régulière. D’ailleurs, dans certains
cas le reste peut être plus intéressant que la partie régulière.
Comme la formule simplifie pourx 0 = 0, on se ramène souvent à ce cas en
considérantg(t) =f(x 0 +t), en faisant un changement de variablesx=x 0 +t,
puis unDL(0)deg(t), dans lequel on resubstitue finalementt=x−x 0.

**Corollaire 4.3.3 (Conséquences de la définition.)** On se limite ici aux cas ouIest
un intervalle, éventuellement privée du pointx 0.

1. Sifadmet unDLenx 0 ∈I, alorsfadmet une limite enx 0 , égale àa 0 =P(0). Si
   x 0 ∈I, cela implique quefest continue enx 0 ou bienfadmet un prolongement
   par continuité enx 0 (en posantf(x 0 ) =a 0 ), dont leDLcoïncide avec celui def.
2. SifadmetDLn(x 0 ),n≥ 1 etx 0 ∈I, alorsfest dérivable enx 0 etf′(x 0 ) =a 1 =
   P′(0).

**Exemple 4.3.4** Pourn∈N,k∈N∗,f(x) =xn+1sinx−kn’est pas définie en 0 mais
admet unDLn(0)(de partie régulière nulle et avec=xsinx−k) et donc un prolonge-
ment par continuité en 0. pourn≥ 1 , ce prolongementf ̃est dérivable en 0 ( 2 epartie du
corollaire) (avecf ̃′(0) = 0), mais la dérivée n’est pas continue en 0 sin≤k: en effet
f′(x) = (n+1)xnsinx−k−kxn−kcosx−k(x 6 = 0)n’admet pas de limite en 0 pourn≤k.

**Remarque 4.3.5** L’exemple précédent montre que même sifadmet unDLà un ordre
aussi élévé qu’on veut, cela n’implique jamais que la dérivée soit continue, et donc encore
moins que la fonction soit deux fois dérivable! (Prendrek=narbitrairement grand dans
l’exemple ci-dessus.)

#### 4.3.2 Unicité du Développement limité

**Lemme 4.3.6 (troncature.)** Sifadmet unDLn(x 0 )de partie régulièreP, alorsfadmet
DLm(x 0 )pour toutm∈ 0 ,...,n, dont la partie régulière sont les termes de dégré≤m
deP.

**Preuve :** Il suffit de montrer que les termesak(x−x 0 )kaveck > mpeuvent s’écrire
come reste d’ordrem:

```
Σnk=m+1ak(x−x 0 )k+ (x−x 0 )n(x) = (x−x 0 )mη(x)
```

avec
η(x) = Σnk=m+1ak(x−x 0 )k−m+ (x−x 0 )n−m(x)→0(x→x 0 ).
2

### 4.4 Existence de D.L.-Formules de taylor

**Théorème 4.3.7 (Unicité)** Sifadmet unDL, il est unique,Petsont uniques.

**Preuve :** (Par récurrence). Pourn= 0,P=a 0 = limx→x
0

```
f(x)et(x) =f(x)−a 0 sont
```

déterminés de façon unique. Supposons que leDLn(x 0 )defest unique, et quef
admet unDLn+1(x 0 ),f =

∑n+1
0 ai(x−x^0 )i+ (x−x^0 )n+1(x). D’après le lemme
4.3.6,a 0 +...+an(x−x 0 )n+ (x−xn)nη(x)avecη(x) =an+1(x−x 0 ) + (x−x 0 )(x)est
unDLn(x 0 )def. D’après l’hypothèse de récurrence ,a 0 ,...,anainsi que le reste
ηsont uniques. Or,xlim→x 0 x−^1 x 0 η(x) =an+1. Ce coefficient, et(x) =x−^1 x 0 η(x)−an+1

sont donc également uniques. 2

### 4.4 Existence de D.L.-Formules de taylor

Dans ce paragraphe, on affirme l’existence duD.Lpour les fonctions suffi-
samment dérivables, et on précise en même temps une expression explicite des
coefficients de la partie régulière en terme des dérivées de la fonction au point du
D.L.

**Définition 4.4.1** SoitA ⊂ Run intervalle ou plus généralement une union d’inter-
valles. Pour tout entiern∈N.

1. On définit par récurrence la dérivéeni`emedefnotéef(n), par :f(0)=f, et pour
   toutn∈N,fn+1= (f(n))′.
2. On définitCn(A)comme l’ensemble des fonctionsf :A→Rtel quefpeut être
   dérivéenfois et sa dérivéenieme` ,f(n), est continue.
3. On dit quefest de la classeC∞surA, lorsque pour toutn∈N,fest de classe
   Cn(A).

**Exemple 4.4.2** la fonctioncosest de classeC∞et l’on a

```
(cosx(n)) =
```

##### {

```
(−1)kcosx si n= 2k
(−1)k+1sinx si n= 2k+ 1
```

**Proposition 4.4.3** Etant donné deux fonctionsfetgde classeCn(D),fgest de classe
Cn(D)et nous avons la formule de Leibniz, qui donne la dérivéeni`emedu produit

```
(fg)(n)= Σnp=0{pnf(p)g(n−p).
```

**4.4. EXISTENCE DE D.L.-FORMULES DE TAYLOR**

**Preuve :** Par récurrence, nous avons(fg)′=f′g+fg′. Supposons que pouru,v∈
Cn(D)on a(fg)(n) = Σnp=0{pnf(p)g(n−p). Considéronsfetgde classeCn+1(D).fg
est de classeCn+1(D)avec(fg)(n+1)= ((fg)′)(n).(fg)′étant de classeCn(D)et la
dérivation étant linéaire, il vient :

```
(fg)(n+1)= ((fg)′)(n)= (f′g)(n)+ (fg′)(n).
```

Or les fonctionsf′,g,g′ etf sont de classeCn(D). L’hypothèse de récurrence
donne :
(fg)(n+1)= Σnp=0{pnf(p+1)g(n−p)+ Σnp=0{pnf(p)g(n−p+1).

Un changement de variable dans le premier terme de la somme permet d’écrire

```
Σnp=0{pnf(p+1)g(n−p)= Σnp=1+1{pn−^1 f(p)g(n+ 1−p),
```

de sorte que

```
(fg)(n+1)=f(n+1)g+ Σnp=1{pn−^1 f(p)gn+1−p+ Σnp=1{pnf(p)g(n−p+1)+fg(n+1).
```

Avec
{pn−^1 +{pn={pn+1,

il vient que

```
(fg)(n+1)=f(n+1)g+ Σnp=1{pn+1f(p)g(n+1−p)+fg(n+1)= Σnp=0+1{pn+1f(p+1)g(n+1−p)
```

```
2
```

**Remarque 4.4.4** 1. C^0 (D)est l’ensemble des fonctions continues deDdansR.

2. On a une suite d’inclusions strictesCn+1(D) ⊂ Cn(D) ⊂ ...... ⊂ C^1 (D) ⊂
   C^0 (D).
3. Sif∈Cn(D)on dit quefest de classeCn
   4.C∞(D)l’intersection desCn(D)pourn∈N, c’est-à-direC∞(D)est l’ensemble des
   fonctionsf:D→Radmettant des dérivées de tout ordre. On dit qu’elles sont de
   classeC∞

**Théorème 4.4.5 (formule de Taylor-Lagrange.)** Soientf∈ Cn+1(I)eta,b∈Iavec
a < bet[a,b]⊂I. Alors il existec∈]a,b[tel que

f(b) =f(a)+(b−a)f′(a)+

```
(b−a)^2
2! f
```

```
(2)(a)+...+(b−a)n
n! f
```

```
(n)(a)+(b−a)n+1
(n+ 1)! f
```

```
(n+1)(c).
```

Sin= 0on retrouve le théorème des accroissements finis

**4.4. EXISTENCE DE D.L.-FORMULES DE TAYLOR**

**Preuve :** SoitAla constante qui vérifie

f(b)−f(a)−(b−a)f′(a)−(b−a)

```
2
2! f
```

```
(2)(a)−...−(b−a)n
n! f
```

```
(n)(a) =(b−a)n+1
(n+ 1)! A.
```

Comme dans la démonstration du théorème des accroissements finis, on introduit
une fonction auxiliaire

φ(x) =f(b)−f(x)−(b−x)f′(x)−(b−x)

```
2
2!
```

```
f(2)(x)−...−(b−x)
```

```
n
n!
```

```
f(n)(x)−(b−x)
```

```
n+1
(n+ 1)!
```

##### A.

Commef ∈ Cn+1(I), on af(n) ∈ C^1 (I), doncφ∈ C^1 (I). Le choix deAdonne
φ(a) = 0et on aaussiφ(b) = 0. On peut donc appliquer le théorème de Rolle : il
existec∈]a,b[tel queφ′(c) = 0. Calculons la dérivée deφ

```
termes deφ | dérivée
f(b) | 0
−f(x) | −f′(x)
−(b−x)f′(x) | +f′(x)−(b−x)f”(c)
... | ...
```

```
−(b−x)
```

```
p
p! f(p)(x) | +
```

```
(b−x)p−^1
(p−1)! f(p)(x)−
```

```
(b−x)p
p! f(p+1)(x)
−(b(−p+1)!x)p+1f(p+1)(x) | +(b−px!)pf(p+1)(x)−(b(−p+1)!x)p+1f(p+2)(x)
... | ...
−(b−nx!)nf(n)(x) | +(b(−nx−)n1)!−^1 f(n)(x)−(b−nx!)nf(n+1)(x)
−(b−x)
```

```
n+1
(n+1)! A | +
```

```
(b−x)n
n! A
```

Dans la colonne de droite tous les termes sauf deux se simplifient, il reste

```
φ′(x) =(b−x)
```

```
n
n! (A−f
```

```
(n+1)(x)).
```

Commec 6 =b, l’égalitéφ′(c) = 0donnef(n+1)(c) =A. On a obtenu la formule de
Taylor. 2

Le théorème indique que sifestn+ 1fois continûment dérivable sur[x 0 ,x],
alorsfadmet unDLn(x 0 )de partie régulière

```
P=f(x 0 ) +f′(x 0 )X+...+f
```

```
n(x 0 )
n!
```

##### ,

(polynôme de coefficientak=k^1 !f(k)(x 0 )), avec le reste de Lagrange d’ordren,

```
∃c∈]x 0 ,x[:f(x)−P(x−x 0 ) =f
```

```
(n+1)(c)
(n+ 1)!(x−x^0 )
```

```
n+1
```

.

### 4.5 D.L.de quelques fonctions élémentaires

**Remarque 4.4.6** On peut montrer que le théorème reste vrai sous la condition moins
forte quef(n)(a)existe etfsoitn+ 1fois dérivables sur]a,b[. Par exemple,f(x) =√x,
admet unDL 0 (0)de partie régulière nulle et de resteR 0 (f, 0 ,x) =

##### √

x = o(x^0 ). La
dérivéef′(x) =^12 x−^1 /^2 n’est pas définie en 0 , mais le reste peut néanmoins s’exprimer
commef′(ξ).xavecξ=^12 x.

**Remarque 4.4.7** Dans le cas particulier (mais fréquent) oùx 0 = 0, et en posantc=θx
avecθ∈[0,1], la formule de Taylor-Lagrange s’appelle formule de MacLaurin :

```
∃θ∈]0,1[:f(x) =f(0) +...+f
```

```
(n+1)(θx)
(n+ 1)! x
```

```
(n+1).
```

**Théorème 4.4.8 (formule de Taylor-Young.)** Soientf ∈ Cn(D)eta∈D. Alorsf
admet un développement limité d’ordrenenadonné par

```
f(x) =f(a) + (x−a)f′(a) +(x−a)
```

```
2
2! f”(a) +...+
```

```
(x−a)n
n! f
```

```
(n)(a) +o((x−a)n).
```

**Preuve :** On af∈ Cn(D) =C(n−1)+1(D). On peut appliquer la formule de Taylor-
Lagrange à l’ordren− 1 àfavecxà la place deb. On suppose ici quex > a.

```
f(x) =f(a) + (x−a)f′(a) +...+(x−a)
```

```
n− 1
(n−1)!
```

```
f(n−1)(a) +(x−a)
```

```
n
n!
```

```
f(n)(c),
```

avecc∈]a,x[. Ecrivons le dernier terme sous la forme

```
(x−a)n
n!
```

```
fn(c) =(x−a)
```

```
n
n!
```

```
f(n)(a) +(x−a)
```

```
n
n!
```

```
(f(n)(c)−f(n)(a)).
```

Il suffit donc de montrer que

```
(x−a)n
n! (f
```

```
(n)(c)−f(n)(a)) =o((x−a)n).
```

c’est-à-dire quelimx→a(f(n)(c)−f(n)(a)) = 0. Cela résulte de la continuité def(n)au
pointa 2

### 4.5 D.L. de quelques fonctions élémentaires

En utilisant la formule de Taylor, on obtient lesD.L.(0)des fonctions élémen-
tairesexp,cos,sin,(1 +x)αdonnés ci-dessous, oùo(xn)représente une fonction
inconnue de la formexn(x), aveclimx→ 0 (x) = 0.

**4.5.** D.L. **DE QUELQUES FONCTIONS ÉLÉMENTAIRES**

#### 4.5.1 Fonction exponentielle

```
ex= expx= 1 +x+^12 x^2 +...+n^1 !xn+o(xn)
```

En effet pour toutk∈Non af(k)(x) =ex, doncf(k)(0) = 1. D’où

```
ex= Σnk=0x
```

```
k
k!
```

```
+o(xn).
```

#### 4.5.2 Fonctions trigonométriques :

```
Puisque la dérivée d’ordrendecosest donnée par la formule
```

```
(cosx)(n)=
```

##### {

```
(−1)kcosx si n= 2k
(−1)k+1sinx si n= 2k+ 1
```

nous déduisons que

```
sinx=x−^16 x^3 +...+ (−1)
```

```
n
(2n+ 1)!x
```

```
2 n+1+o(x 2 n+1)
```

```
cosx= 1−^12 x^2 +...+(−1)
```

```
n
(2n)!x
```

```
2 n+o(x 2 n)
```

#### 4.5.3 Fonctionx7→ln(1 +x):

```
ln(1 +x) =x−^12 x^2 +...+(−1)
```

```
n+1
n x
```

```
n+o(xn)
```

```
1
1 −x= 1 +x+x
```

(^2) +...+xn+o(xn)
Il suffit de calculer les dérivées successives. On a
f(k)(x) =k!(1−x)−^1 −k,∀k∈N
doncf(k)(0) =k!et
1
1 −x= Σ
nk=0xk+o(xn).

#### 4.5.4 Fonctionx7→(1 +x)α:

```
(1 +x)α= 1 +αx+...+α 1 .α− 21 .α− 32 ...α−nn+ 1xn+o(xn)
```

### 4.6 Opérations sur les développements limités

#### 4.5.5 Fonctions hyperboliques :

Les fonctionschx = ex+ 2 e−x etshx = ex− 2 e−x ont commeD.Lles termes en
puissances paires resp. impaires deex, ce sont donc ceux decosxetsinx, mais
avec des signes+partout. (En effet,cosx= Reeix= ch(ix)etsinx= Imeix =
1
ish(ix).)

### 4.6 Opérations sur les développements limités

**Proposition 4.6.1 (Somme et produit de développements limités.)** Soientf etg
deux fonctions admettant des développements limités d’ordrenenaalorsf+getfg
admettent des développements limités d’ordrenena. Plus précisement si

```
f(x) = Σnk=0αk(x−a)k+o((x−a)n)etg(x) = Σnk=0βk(x−a)k+o((x−a)n)
```

alors
(f+g)(x) = Σnk=0(αk+βk)(x−a)k+o((x−a)n)

et
(fg)(x) = Σnk=0

##### (

```
Σki=0αiβk−i
```

##### )

```
(x−a)k+o((x−a)n).
```

**Preuve :** L’assertion concernant l’addition est évidente. Pour le produit on multi-
plie les polynômes en(x−a)venant defetgen négligeant les termes de dégré

> nqui sont deso((x−a)n). Pour calculer le produit des polynômes on com-
> mence par calculer le terme constant, puis le coéfficient de(x−a)puis celui de
> (x−a)^2 ,...(fg)(x) =a 0 b 0 + (a 0 b 1 +a 1 b 0 )(x−a) + (a 0 b 2 +a 1 b 1 +a 2 b 0 )(x−a)^2 +...
> 2

En pratique, connaissant les développements limités des fonctions usuelles en
0 , on calcule le développement limité d’une fonctionf(x)au voisinage deade la
manière suivante.

1. On se ramène au point 0 par la translation, c’est-à-dire en posantx−a=u,
   de sorte queutend vers 0 quandxtend versa. Ainsi le développement
   limité en 0 de la fonctiong(u) = f(u+a)correspond au développement
   limité enade la fonctionf.
2. On utilise les formules donnant le développement limité d’une somme,
   d’un produit et d’une composée de fonctions usuelles.

**Proposition 4.6.2 (Composition de développements limités.)** Soientf etgdeux
fonctions ayant des développements limités d’ordrenen 0. On suppose queg(0) = 0.

**4.6. OPÉRATIONS SUR LES DÉVELOPPEMENTS LIMITÉS**

Alorsf◦ga un développement d’ordrenen 0 qui s’obtient en appliquant dans le dé-
veloppement defla variablexpar le développement deget en négligeant les termes de
dégré> n.

**Exemple 4.6.3** Calcul du développement limité deecosxen 0 à l’ordre 3. On a

```
cosx= 1−x
```

```
2
2 +o(x
```

(^3) ).
On acos 0 = 1 6 = 0. Mais on peut écrirecosx = 1 +u(x)avecu(0) = 0. Alors
ecosx=e1+u(x)=eeu(x). On a
eu= 1 +u+u
2
2 +
u^3
6 +o(u
(^3) ).
Commeu(x) =− 2 x^2 +o(xx^3 ),u^2 va commencer parx^4 et on peut donc négliger toutes les
puissancesukpourk≥ 2. Finalement, il reste
ecosx=e(1−x
2
2 ) +o(x
(^3) ).
**Proposition 4.6.4 (Développement limité de la fonction inverse.)** Soientfetgdeux
fonctions admettant des développements limités à l’ordrenen 0. Sig(0) 6 = 0, la fonction
f
gadmet un développement limité à l’ordrenen^0.
**Preuve :** Il suffit de montrer que^1 ga un développement limité à l’ordrenen 0.
Ecrivons le développement limité degà l’ordrenen 0
g(x) =b 0 + Σnk=1bkxk+o(xn)
avecb 06 = 0. Alors
1
g(x)=

##### 1

```
b 0 + Σnk=1bkxk+o(xn)=
```

##### 1

```
b 0
```

##### (

```
1 + Σnk=1bbk 0 xk+o(xn)
```

##### )=^1

```
b 0
```

##### 1

```
1 −u
```

avecu=−

##### (

```
Σnk=1bbk 0 xk
```

##### )

```
+o(xn). On sait que 1 −^1 u= 1 +u+u^2 +...+un+o(un).
```

Par composition on a un développement limté d’ordrende la fonctiong(^1 x) 2

**Exemple 4.6.5** Calcul du développement limité detanx=cossinxxen 0 à l’ordre 5. On a

```
sinx=x−x
```

```
3
6
```

```
+ x
```

```
5
120
```

```
+o(x^5 )
```

et

```
cosx= 1−x
```

```
2
2 +
```

```
x^4
24 +o(x
```

(^5) ).

### 4.7 Application des développements limités

Il suffit d’avoir le développement à l’ordre 5 decos^1 x. On acos^1 x= 1 −^1 uavecu=x 22 −x 244 +
o(x^5 ). On a aussi 1 −^1 U= 1 +u+u^2 +u^3 +u^4 +u^5 +o(u^5 ). Comme le premier terme (par
ordre croissant des puissances dex) du développement limité deuest enx^2 , le premier
terme du développement limité deu^2 est enx^4. Celui deu^4 est enx^6 , donc négligeable à
l’ordre 5 , ainsi que celui deu^5. En d’autres motsu^4 =o(x^5 )etu^5 =o(x^5 ). Il reste donc

```
1
1 −u= 1 + (
```

```
x^2
2 −
```

```
x^4
24 ) +
```

```
x^4
4 +o(x
```

(^5) ) = 1 +x^2
2 +
5 x^4
24 +o(x
(^5) ).
En multipliant on obtient
tanx= sinx
cosx

##### =

##### (

```
x+x
```

```
3
6
```

```
+ x
```

```
5
120
```

```
+o(x^5 )
```

##### )(

```
1 +x
```

```
2
2
```

```
+^5 x
```

```
4
24
```

```
+o(x^5 )
```

##### )

et apès simplication

```
tanx=x+x
```

```
3
3 +
```

```
2 x^5
15 +o(x
```

(^5) ).

### 4.7 Application des développements limités

```
Calculs des limites
```

1. Calcul dexlim→ 0 exsin−ex−x.
   ex−e−x= 1 +x−(1−x) +o(x) = 2x+o(x) sinx=x+o(x)donc

```
limx→ 0 e
```

```
x−e−x
sinx = limx→^0
```

```
2 +o(xx)
1 +o(xx)
```

##### = 2

2. Calcul dexlim→ 0 exe−e−x−^11.
   Le développement limité deexen 1 à l’ordre 2 est

```
ex=e+e(x−1) +e
2
```

```
(x−1)^2 +o((x−1)^2 ).
```

```
Donc
e
ex−e−
```

##### 1

```
x− 1 =
```

```
e
e(x−1) +e 2 (x−1)^2 +o((x−1)^2 )−
```

##### 1

```
x− 1
=^1
(x−1) +(x− 2 1)^2 +o((x−1)^2 )
```

```
−x−^11
```

```
= x−^11
```

##### [

##### 1

```
1 +(x− 2 1)+o((x 1 ))
```

##### − 1

##### ]

```
= x−^11
```

##### (

```
−(x− 2 1)−o((x−1))
```

##### )

##### .

### 4.8 D.L. en±∞

```
Donc
```

xlim→ (^1) exe−e−x−^11 = limx→ (^1) x−^11

##### (

```
−(x− 2 1)−o((x−1))
```

##### )

```
= limx→ 1 −^12 −o((xx−− 1 1))=−^12.
```

3. Prolongeons par continuité en 0 la fonction
   f: ]−π,π[ → R
   x 7→ sin^22 x− 1 −cos^1 x
   Le développement limité desinxen 0 à l’ordre 4 donnesinx=x−x 63 +o(x^4 )
   doncsin^2 x=x^2 −x 34 +o(x^5 )et
   2
   sin^2 x

```
=x^22
```

##### (

##### 1

```
1 −x 32 +o(x^3 )
```

##### )

```
=x^22
```

##### (

```
1 +x
```

```
2
3 −o(x
```

(^3) )

##### )

##### .

```
Par ailleurs, le développement limité decosxau voisinage de 0 à l’ordre 5
donnecosx= 1−x 22 +x 244 +o(x^5 ). Donc
1
1 −cosx=
```

##### 2

```
x^2
```

##### (

##### 1

```
1 −x 122 +o(x^3 )
```

##### )

```
=x^22
```

##### (

```
1 +x
```

```
2
12 +o(x
```

(^3) )

##### )

##### .

```
En conclusion,
2
sin^2 x−
```

##### 1

```
1 −cosx=
```

##### 2

```
x^2
```

##### (

```
x^2
4 +o(x
```

(^3) )

##### )

```
=^12 +o(x)
```

```
D’où
xlim→ 0 2
sin^2 x
```

```
− 1 −^1 cosx=^12.
```

**Etude locale des fonctions** On considèrefdéfinie surI=]x 0 −α,x 0 +α[admettant
unD.Lp(x 0 )de partie régulièreP=a 0 +a 1 X+apXp,p≥ 2 tel queap 6 = 0. Alors
la tangenteTà la courbeCfdefa pour équationy=a 0 +a 1 (x−x 0 ), et la position
deCfpar rapport àTest donnée par le signe deap(x−x 0 )p:
1 er **cas** :p **pair** le pointP= (x 0 ,f(x 0 ))est dit ordinaireap> 0 ⇒Cfau dessus
deT,ap< 0 ⇒Cfen dessus deT, Sia 1 = 0⇒extremun ; dans ce cas :ap> O⇒
minimun etfconvexe, etap< 0 ⇒maximun etfconcave au voisinage dex 0.
2 e **cas** :p **impair** P = (x 0 ,f(x 0 ))est un point d’inflexion,CftraverseTenP.
Convexité et concavité à droite et à gauche dePselon le signe deap(x−x 0 )p.

### 4.8 D.L. en ±∞

**Définition 4.8.1** On dit quef : I → R,I =]a,∞[(resp.I =]− ∞,a[), admet un
DLn(+∞)(resp.DLn(−∞)) si et seulement si il existe un polynômeP∈Rn[X]tel que

```
∀x∈I:f(x) =P(
```

##### 1

```
x) +o(1/x
```

```
n)(x→±∞)
```

(avec toujourso(1/xn)) une fonction de la forme(x)/xn,→ 0.

### 4.9 Etude d’une branche infinie en±∞.

Doncfadmet unD.Ln(±∞)si et seulement sig(t) =f(1/t)admet unD.Ln(±0);
c’est ainsi qu’on détermine dans la pratique lesD.L.(±∞)(même si on n’écrit pas
explicitement le changement de variablest= 1/x).

**Corollaire 4.8.2** Sif admet unD.L.(±∞), alors f admet une limite finie en±∞
(comme dans le cas d’unDL(a),a∈R).

**Remarque 4.8.3** Sifs’écrit comme différence de deux fonctions qui n’admettent pas
une limite finie,fpeut quand même admettre unD.L(∞)lorsque ces deux fonctions
sont équivalentes en l’infini. Pour pouvoir faire unD.Lde l’autre facteur (différence de
deuxD.L.). Si suffisamment de termes des deuxD.L.s’annulent il est possible que le
produit soit unD.L.au sens strict (sinon c’est unD.L.généralisé).

**Exemple 4.8.4** D.L. 2 (±∞)def(x) =

##### √

```
x^2 − 1 −
```

##### √

x^2 −x: séparément les deux racines
n’admettent pas deDL(∞). Or,f(x) =|x|.

##### (√

```
1 − 1 /x^2 −
```

##### √

```
1 − 1 /x
```

##### )

```
, et en utilisant
√
1 − 1 /x= 1 +^12 (− 1 /x)−^18 (− 1 /x)^2 +o(1/x)^2 ,
```

on a

```
f(x) =|x|
```

##### (

```
1 +^12 (− 1 /x^2 ) +o(1/x^2 )−1 +^18 x^12
```

##### )

```
=|x|.
```

##### (

##### 1

##### 2

##### 1

```
x−
```

##### 3

##### 8

##### 1

```
x^2 +o(1/x
```

(^2) )

##### )

##### ,

en développant, on af(x) = sgn(x)

##### ( 1

```
2 −^38 x^1 +o(1/x)
```

##### )

```
, d’où le résultat cherché.
```

### 4.9 Etude d’une branche infinie en ±∞

Pour trouver l’assymptote (si elle existe) à la courbeCd’une fonctionf, on
cherche unDL 1 (∞)de la fonctiong:=x7→ x^1 f(x). Sig(x) =a+b/x+o(1/x),
alorsf(x) =xg(x) =a.x+b+o(1)(x→∞), donc la droite∆d’équationy=ax+b
est assymptote àC.

**Remarque 4.9.1** On peut renoncer à l’introduction de la fonctiong; et faire leDL(∞)
directement à partir de la fonctionf. Cependant, l’expressionf(x) =a.x+b+o(1)(x→
∞)n’est pas unDL(∞)au sens strict de la définition ; a cause du premier terme qui n’est
pas un polynôme en 1 /x.

La position deCpar rapport à∆au voisinage de l’infini se déduit du signe de
f(x)−(ax+b). Pour connaitre, on peut chercher le prochain terme non-nul dans
leDL(∞)deg. Sig(x) =a+b/x+ap/xp+o(1/xp)avecap 6 = 0, alors on af(x) =
ax+b+ap/xp−^1 +o(1/xp−^1 ). Le signe deapindique donc la position deCpar

### 4.10 Exercices

rapport à∆: pourap> 0 .Cest au dessus de∆au voisinage de+∞, sinon en-
dessous. Le même raisonnement s’applique au voisinage au voisinage de−∞, en
tenant compte du signe dexp−^1 : ici c’estsgnap.(−1)p−^1 qui indique siCest au-
dessus ou en-dessous de∆Notons que^1 xfpeut ne pas admettre deDLpavecp
assez grand pour déterminer la position par rapport à∆, comme c’est le cas pour
f=x7→x+^1 xsin^2 x; on peut toutefois affirmer quefest au-dessus dey=x

### 4.10 Exercices

**Exercice 20** On rapelle queshx=ex− 2 e−x.

1. Donner le developpement limité à l’ordre 3 au voisinage de 0 des fonctions sui-
   vantes :
   a) shx b)sinshxx c) ln(1 +x)
2. Calculer

```
xlim→ 0
```

##### (

```
sinx
shx
```

)x (^12)
**Correction 20** 1. DL 3 (0):
a)shx=x+x
3
6 +o(x
(^3) ) c) ln(x+ 1) =x−x^2
2 +
x^3
3 +o(x
(^3) )
b) Pour donner le quotient à l’ordre 3, nous devons donner les DL du numérateur
et du dénominateur à l’odre 4, car les deux n’admette pas de terme conatant. Mais
sinx=x−x 63 +o(x^4 )etshx=x+x 63 +o(x^4 )
donc
sinx
shx =
x−x 63 +o(x^4 )
x+x 63 +o(x^4 )

##### =

```
1 −x 62 +o(x^3 )
1 +x 62 +o(x^3 )
```

##### =

##### (

```
1 −x
```

```
2
6
```

##### )(

```
1 +x
```

```
2
6
```

##### )

```
+o(x^3 ) = 1−x
```

```
2
3 +o(x
```

(^3) ).
Alors
ln

##### (

```
sinx
shx
```

##### )

```
= ln
```

##### (

```
1 −x
```

```
2
3 +o(x
```

(^3) )

##### )

```
=−x
```

```
2
3 +o(x
```

(^3) )

2. Calcule de la limite.
   Nous remarquons d’abord que

```
(sinx
shx
```

```
)x^12
=ex^12 ln(sinshxx). Or d’après ce qui précède,
ln
```

```
(sinx
shx
```

##### )

```
=−x 32 +o(x^3 )par suitex^12 ln(sinshxx) =−^13 +o(x). Par conséquent,
```

```
xlim→ 0
```

##### (

```
sinx
shx
```

)x (^12)
= limx→ 0 ex^12 ln(sinshxx)= limx→ 0 e−^13 +o(x)=e−^13
**Exercice 21** 1. Justifier que la fonctionsh(x) =ex− 2 e−xréalise une bijection deRsur
R.

**4.10. EXERCICES**

2. On noteArgshla fonction réciproquesh. Justifier queArgshest dérivable surRet
   queArgsh′(x) =√1+^1 x 2
3. Donner leDL 6 (0)de√1+^1 x 2 et en déduire leDL 6 (0)deArgsh.

**Correction 21** 1. La fonctionshest définie surR, continue et dérivable surRcar la
fonction exponentielle l’est, de dérivée

```
(sh)′(x) =e
```

```
x+e−x
2 >^0
Doncshest strictement croissante. Par ailleurs
```

```
x→−∞lim sh(x) =−∞
carextend vers 0 ete−xtend vers+∞. De même
```

```
x→lim+∞sh(x) = +∞
Fonction continue et strictement monotone deRdansRréalise une bijectionR
dansR.
2.shétant dérivable surRet(sh)′(x) =ex+ 2 e−x = chx 6 = 0, sa réciproqueArgshest
dérivable sur son ensemble de définitionR. Par ailleurs, nous avons par définition
```

```
Argsh′(x) =^1
sh′(Argsh(x))
```

##### =^1

```
ch(Argsh(x)
= √^1
1 + sh^2 (Argsh(x)
```

```
carch^2 x−sh^2 x= 1
```

##### = √^1

```
1 +x^2
```

3. LeDL 6 (0)de√1+^1 x 2 = (1 +x^2 )−^12 Nous avons au voisinage de 0

```
(1 +x)−
```

(^12)
= 1 + (−^12 )x+2!^1 (−^12 )(−^12 −1)x^2 +3!^1 (−^12 )(−^12 −1)(−^12 −2)x^3 +o(x^3 )
= 1 + (−^12 )x+^38 x^2 − 165 x^3 +o(x^3 )
On en déduit que
√^1
1 +x^2
= (1 +x^2 )−^12 = 1 + (−^1
2
)x^2 +^3
8
x^4 −^5
16
x^6 +o(x^6 )
PuisqueArgsh′(x) = √1+^1 x 2 etArgsh(0) = 0, nous avons en intégrant la partie
régulière de sa dérivée
Argsh(x) =x+ (−^16 )x^3 + 403 x^5 +o(x^6 )

**4.10. EXERCICES**

**Exercice 22** 1. Justifier que la fonctionf(x) = 1+xx (^24) +x 4 admet un developpement
limité d’ordre 10 au voisinage de 0, et donner ce developpement.

2. Donner le developpement limité d’ordre 2 dex7−→ln(sinx)en π 2 , et en déduire
   xlim→π
   2

```
(sinx)^1 /(2x−π).
```

**Correction 22** 1. On dit qu’une fonction admet un developpement limité à l’ordre 10
enx 0 s’il existe des réelsa 0 ,a 1 ,...,a 10 , tel quef(x) =a 0 +a 1 (x−x 0 ) +...+
a 10 (x−x 0 )^10 +o((x−x 0 )^10 ).
On dit qu’une fonction admet un developpement limité à l’ordre 10 en+∞s’il

existe des réelsa 0 ,a 1 ,...,a 10 , on aitf(x) =a 0 +a (^11) x+...+a (^10) x^110 +o(x^110 ). 2. La fonctionf(x) =f(x) =1+xx (^24) +x 4 est de classeC∞(R)donc admet un developpe-
ment limité d’ordre 10 en 0.
En effectuant la division suivant les puissances croissantes du numérateur par le
dénominateur, on trouve :
f(x) =f(x) = x
4
1 +x^2 +x^4 =x
(^4) −x (^6) +x (^10) +o(x (^10) ).

3. (a) Donnons le developpement limité d’ordre 2 dex 7−→ ln(sinx)en π 2 : En
   posantu=x−π/ 2 , nous avons queutends vers 0 lorsquextendsπ/ 2 et
   sinx= sin(u+π/2) = cosu. Or au voisiage de à, on acosu= 1−u2!^2 +o(u^2 ).
   D’oùDL 2 (π/2)desinxest

```
sinx= 1−^12 (x−π/2)^2 +o((x−π/2)^2 )
```

```
Par ailleurs leDL 2 (0)deln(1 +x)est
```

```
ln(1 +x) =x−x
```

```
2
2
```

```
+o(x^2 )
```

```
Il vien alors que
```

```
ln(sinx) = ln(1−^12 (x−π/2)^2 +o((x−π/2)^2 )) =−^12 (x−π/2)^2 +o((x−π/2)^2 )
```

```
(b) Déduisonsxlim→π
2
```

```
(sinx)^1 /(2x−π).
```

```
(sinx)^1 /(2x−π)=e^1 /(2x−π) ln(sinx)=e^1 /(2x−π)(−^12 (x−π/2)^2 +o((x−π/2)^2 ))=e−^14 ((x−π/2)+o((x−π/2)))
```

```
D’où
xlim→π/ 2 (sinx)^1 /(2x−π)= limx→π/ 2 e−^14 ((x−π/2)+o((x−π/2)))= 1
```

**Exercice 23** 1. Déterminer le developpement limité à l’ordre 1 au voisinage de 0 de la
fonctionu(x) = Arctan(1 +x)

**4.10. EXERCICES**

2. Calculer

```
xlim→π
6
```

```
Arctan(2 sinx)−π 4
cos 3x
```

**Indications 8** En posantx=π 6 +ttrouver des équivalents du numérateur et du déno-
minateur.

# Bibliographie

```
[1] G.Cagnac, E, Ramis, J.Commeau, Traité de mathématiques spéciales,
Masson&Cie
[2] William F.Trench, Introduction to real analysis, Free Edition 1 , March
2009.
[3] Norbert Hungerbühler Paul Turner, notes de cours d’Analyse 1 ( 2010 ),
Departement de Mathématiques, Université de Fribourg
[4] Guy Laffaille Christian Pauly, Cours d’analyse 1 License 1 ersemestre,
( 2006 ).
[5] D.Guinin-B ; Joppin, Précis de Mathématiques 2 première partie : Ana-
lyse 2 DEUG MIAS 1 eannée, 2 esemestre version du 21 avril 2002
```
