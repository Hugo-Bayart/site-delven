# Guide de configuration - Backend Contact & Audit

## Variables d'environnement

Créez un fichier `.env` à la racine du projet basé sur [`.env.example`](.env.example) :

```bash
cp .env.example .env
```

Remplissez les variables avec vos identifiants :

### Option 1 : Gmail (recommandé pour tester)
```env
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=votre-email@gmail.com
MAIL_PASS=votre-mot-de-passe-app  # App Password, pas votre mot de passe Gmail
MAIL_FROM=noreply@votredomaine.com
MAIL_TO=contact@delven.fr
```

**Comment générer une App Password Gmail :**
1. Aller sur [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Activer l'authentification à deux facteurs
3. Créer une App Password pour "Mail" et "Windows"
4. Copier-coller le mot de passe généré

### Option 2 : Brevo (ex-Sendinblue)
```env
MAIL_HOST=smtp-relay.brevo.com
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=votre-email@exemple.com
MAIL_PASS=smtpkey-xxxxxxxxxxxxx
MAIL_FROM=noreply@votredomaine.com
MAIL_TO=contact@delven.fr
```

### Option 3 : Mailersend
```env
MAIL_HOST=smtp.mailersend.net
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=MS_XXXXXXXXXXXXXXXX
MAIL_PASS=MS_XXXXXXXXXXXXXXXX
MAIL_FROM=noreply@votredomaine.com
MAIL_TO=contact@delven.fr
```

## Déploiement sur Vercel

### Configuration initiale
1. **Installer Vercel CLI** (optionnel pour les tests locaux)
   ```bash
   npm i -g vercel
   ```

2. **Déployer sur Vercel**
   ```bash
   vercel
   ```
   Suivez les instructions pour créer/lier un projet.

3. **Ajouter les variables d'environnement sur Vercel**
   - Allez sur https://vercel.com/dashboard
   - Sélectionnez votre projet
   - Settings → Environment Variables
   - Ajoutez toutes les variables de `.env`

### Développement local avec `vercel dev`
Pour tester les API serverless en local :

```bash
vercel dev
```

Cela lance un serveur sur `http://localhost:3000` avec support complet des API serverless.

### Développement sans `vercel dev`
Si vous préférez développer avec `npm run dev` classique, les appels fetch vers `/api/contact` et `/api/audit` vont fail en développement (c'est normal). Pour éviter les erreurs :

- Les erreurs réseau seront catchées et affichées aux utilisateurs
- En production sur Vercel, tout marche normalement

## API Endpoints

### POST /api/contact
Envoie un email de contact simple.

**Body :**
```json
{
  "name": "Jean Dupont",
  "email": "jean@example.com",
  "phone": "+33 6 00 00 00 00",
  "message": "Votre message ici",
  "company": ""  // Honeypot anti-spam (laisser vide)
}
```

**Response :**
```json
{
  "ok": true,
  "id": "message-id-xyz"
}
```

### POST /api/audit
Envoie une demande d'audit avec emails au client ET à l'équipe interne.

**Body :**
```json
{
  "nom": "Jean Dupont",
  "email": "jean@example.com",
  "telephone": "+33 6 00 00 00 00",
  "entreprise": "Ma Société SAS",
  "secteur": "Commerce",
  "salaries": "10-50",
  "probleme": "Description détaillée des problèmes processus",
  "budget": "10000-30000"
}
```

**Response :**
```json
{
  "ok": true,
  "id": "message-id-xyz"
}
```

## Tests

Testez les endpoints en utilisant curl ou Postman :

```bash
# Contact
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'

# Audit
curl -X POST http://localhost:3000/api/audit \
  -H "Content-Type: application/json" \
  -d '{"nom":"Test","email":"test@example.com","entreprise":"Test Ltd","probleme":"Test problem"}'
```

## Troubleshooting

### Les emails n'arrivent pas
- Vérifier les credentials dans `.env`
- Vérifier les logs Vercel : `vercel logs`
- Vérifier le dossier spam/indésirables
- Pour Gmail : vérifier que l'App Password est correct et l'authentification 2FA activée

### CORS errors en développement
- Utilisez `vercel dev` pour un environnement plus proche de la production
- Ou ajoutez un serveur proxy local

### Timeouts
- Les API serverless Vercel peuvent prendre un peu de temps à démarrer la première fois
- Augmenter le `maxDuration` dans `vercel.json` si nécessaire
