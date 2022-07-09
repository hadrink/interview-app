# Rapport test technique

## Bonnes pratiques
- Utilisation correcte du pattern redux dans son ensemble.
- Code très bien rangé et découpé. 

## Mauvaises pratiques
- Plusieurs jeux de données dans le store (items, newItems). Privilégier une seule source de vérité. 
- Commenter un peu plus le code surtout si il n'est pas typé.
- Utilisation de redux pour ce genre d'application.

## Améliorations possibles
- Utilisation de typescript pour plus de lisibilité.
- Utilisation de Styled au lieu de Sass pour la sémantique (choix personnel, Sass c'est cool aussi).
- Mettre à jour les dépendances dépréciées (node-sass et la version de node dans le Dockerfile de l'api).
