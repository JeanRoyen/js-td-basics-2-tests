/*
TESTS - PRÉPA 6 : Date valide

Écrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas.

AIDE (en français) :
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
- le 31 janvier 2019 est une date valide
- le 28 février 2019 est une date valide
- le 29 février 2019 n'est PAS une date valide
- le 29 février 2020 est une date valide
- le 30 février 2020 n'est PAS une date valide
- le 30 avril 2020 est une date valide
- le 31 avril 2020 n'est PAS une date valide

Étapes :
1. Demandez à l'utilisateur d'entrer une date sous forme de jour, mois et année, puis stockez ces valeurs dans des variables (par exemple, day, month, year).
2. Initialisez une variable maxDays pour stocker le nombre maximum de jours autorisés pour le mois.
3. Utilisez une série de conditions pour déterminer maxDays en fonction du mois (y compris le cas de février avec gestion bissextile).
4. Utilisez une autre condition pour vérifier si la date est valide en comparant le jour entré par l'utilisateur avec maxDays.
5. Affichez dans la console si la date est valide ou non : "La date … est valide" ou "La date … n'est PAS valide".

N'oubliez pas de tester votre programme avec diverses dates pour vous assurer qu'il fonctionne correctement.

Vous pouvez utiliser les exemples que vous avez fournis comme point de départ.
*/

/*
    1. Déclarer les variables de temps et demander une entrée utilisateur
    1.1 Tester si l'entrée utilisateur est un nombre puis nombre positif
    2. Initialiser une variable pour le maximum de jour par mois
    3. Importer le programme pour bissextile depuis test-p5
    4. Condition en fonction du mois sur maximum de jours
    4.1 !!! Février !!!
    5. Comparaison entre entrée utilisateur et maximum de jours
    6. Affichage de date valide ou non
 */

const year = parseInt(prompt("Entrez l'année"));
const month = parseInt(prompt("Entrez le mois"));
const day = parseInt(prompt("Entrez le jour"));
let maxDay = 31;
let isBissextile;
let isValid = false; // Inutile pour le moment

// Condition du mois + année bissextile
 if (month === 4 || month === 6 || month === 9 || month === 11 ){
     maxDay = 30;
 } else if (month === 2) {
     maxDay = 28;
     if ((year%4 === 0 && year%100 !== 0) || year%400 === 0){
         maxDay = 29;
     }
 }

 // Vérifications
if (day && month && year) {
    if (day > 0 && month > 0 && year > 0) {
        if (month <= 12){
            if (day <= maxDay) {
                console.log(`La date ${day}/${month}/${year} est valide`)
            } else {
                console.log(`Le jour doit être inférieur ou égal à ${maxDay}`)
            }
        } else {
            console.log("Le mois doit être inférieur à 12")
        }
    } else {
        console.log("Entrez un nombre positif");
    }
} else {
    console.log("Entrez un nombre");
}