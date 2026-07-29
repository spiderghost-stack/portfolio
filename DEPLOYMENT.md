# 🚀 Guide de Déploiement - Portfolio Roes Nay

## ✅ ÉTAPE 1 : CRÉER UN REPOSITORY GITHUB

### 1. Allez sur GitHub
- Connectez-vous sur https://github.com
- Cliquez sur le bouton **"+"** en haut à droite
- Sélectionnez **"New repository"**

### 2. Configurez le repository
```
Repository name: portfolio-roesnay
Description: Mon portfolio personnel - Développeur Web Full Stack
Visibility: Public (ou Private si vous préférez)

❌ NE COCHEZ PAS :
- Add a README file
- Add .gitignore
- Choose a license

(On a déjà tout configuré localement)
```

### 3. Cliquez sur **"Create repository"**

---

## ✅ ÉTAPE 2 : PUSH VERS GITHUB

GitHub va afficher des instructions. **Suivez celle-ci** (on a déjà initialisé Git) :

### Copiez et exécutez ces commandes une par une :

```bash
cd "c:\Users\Power Informatique\Downloads\portfolio-roesnay\portfolio-roesnay"

# Remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE-USERNAME/portfolio-roesnay.git

git branch -M main

git push -u origin main
```

**Exemple si votre username GitHub est "roesnay-dev" :**
```bash
git remote add origin https://github.com/roesnay-dev/portfolio-roesnay.git
git branch -M main
git push -u origin main
```

**Note :** GitHub pourrait vous demander de vous authentifier :
- Utilisez votre **Personal Access Token** (pas votre mot de passe)
- Si vous n'en avez pas, allez sur : Settings > Developer settings > Personal access tokens > Generate new token

---

## ✅ ÉTAPE 3 : DÉPLOYER SUR RENDER

### 1. Créer un compte Render
- Allez sur https://render.com
- Cliquez sur **"Get Started"**
- Connectez-vous avec votre compte **GitHub** (recommandé)

### 2. Créer un nouveau service
- Sur le dashboard Render, cliquez sur **"New +"**
- Sélectionnez **"Static Site"**

### 3. Connecter votre repository
- Render va lister vos repos GitHub
- Cherchez **"portfolio-roesnay"**
- Cliquez sur **"Connect"**

### 4. Configurer le déploiement

```
Name: portfolio-roesnay
Branch: main
Root Directory: (laissez vide)
Build Command: npm install && npm run build
Publish Directory: dist
```

**Options avancées (cliquez sur "Advanced") :**
```
Auto-Deploy: Yes (pour redéployer automatiquement à chaque push)
```

### 5. Cliquez sur **"Create Static Site"**

⏳ **Render va maintenant :**
1. Cloner votre repo
2. Installer les dépendances (`npm install`)
3. Builder le site (`npm run build`)
4. Déployer sur un domaine gratuit

**Durée estimée : 2-3 minutes**

---

## ✅ ÉTAPE 4 : VOTRE SITE EST EN LIGNE ! 🎉

### Render vous donnera une URL du type :
```
https://portfolio-roesnay.onrender.com
```

### Prochaines étapes :

#### **1. Mettre à jour les URLs dans le code**
Remplacez `https://roesnay.com` par votre vraie URL Render dans :
- `index.html` (ligne 29)
- `src/components/SEO.tsx` (ligne 24)
- `public/robots.txt` (ligne 8)
- `public/sitemap.xml` (toutes les URLs)

Puis :
```bash
git add .
git commit -m "Update URLs with Render domain"
git push
```

Render redéploiera automatiquement ! ✅

#### **2. Nom de domaine personnalisé (optionnel)**
Sur Render, allez dans :
- Settings > Custom Domain
- Ajoutez votre domaine (ex: roesnay.com)
- Suivez les instructions pour configurer le DNS

#### **3. Compresser les images**
- Utilisez https://tinypng.com/
- Compressez toutes les images de `public/images/`
- Remplacez-les
- Push vers GitHub
- Render redéploiera avec les images optimisées

---

## 📊 VÉRIFIER LE DÉPLOIEMENT

### 1. Testez votre site
- Ouvrez l'URL Render dans plusieurs navigateurs
- Testez sur mobile
- Vérifiez que toutes les pages fonctionnent

### 2. Testez le SEO
- **Google PageSpeed Insights** : https://pagespeed.web.dev/
  - Collez votre URL Render
  - Vérifiez le score (cible : 90+)

- **Open Graph Preview** : https://www.opengraph.xyz/
  - Testez comment votre site s'affiche sur Facebook/LinkedIn

### 3. Soumettez à Google
- **Google Search Console** : https://search.google.com/search-console/
  - Ajoutez votre site
  - Soumettez le sitemap : `https://votre-url.onrender.com/sitemap.xml`

---

## 🔄 WORKFLOW APRÈS LE DÉPLOIEMENT

### Chaque fois que vous modifiez le code :

```bash
# 1. Faites vos modifications

# 2. Testez localement
npm run dev

# 3. Commit et push
git add .
git commit -m "Description de vos changements"
git push

# 4. Render redéploie automatiquement ! 🚀
```

---

## 🎯 CHECKLIST FINALE

Avant de partager votre portfolio :

- [ ] ✅ Code sur GitHub
- [ ] ✅ Site déployé sur Render
- [ ] ✅ URLs mises à jour dans le code
- [ ] ⏳ Images compressées (TinyPNG)
- [ ] ⏳ Testé sur mobile/desktop
- [ ] ⏳ SEO vérifié (PageSpeed)
- [ ] ⏳ Soumis à Google Search Console
- [ ] ⏳ Partagé sur LinkedIn/Facebook pour tester Open Graph

---

## 🆘 EN CAS DE PROBLÈME

### Le build échoue sur Render ?
- Vérifiez les logs dans l'onglet "Logs"
- Erreurs communes :
  - Node version : Render utilise Node 14+ par défaut
  - Dépendances manquantes : Vérifiez `package.json`

### Le site est blanc ?
- Vérifiez la console du navigateur (F12)
- Erreurs communes :
  - Chemins d'images incorrects
  - Erreurs JavaScript non visibles en dev

### Les routes ne marchent pas (404) ?
- Vérifiez que `render.yaml` est bien commit
- Vérifiez le "Publish Directory" = `dist`
- Vérifiez les "Rewrite rules" dans Render

---

## 🎉 FÉLICITATIONS !

Votre portfolio est maintenant **en ligne et accessible au monde entier** ! 🌍

**Partagez-le sur :**
- LinkedIn
- Twitter
- Facebook
- Votre CV
- Vos candidatures

**Lien direct :** `https://portfolio-roesnay.onrender.com` (ou votre domaine personnalisé)

---

**Besoin d'aide ?** Relancez-moi et dites-moi où vous en êtes ! 🚀
