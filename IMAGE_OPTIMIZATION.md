# 📸 Guide d'optimisation des images

## ⚠️ PROBLÈME ACTUEL
Vos images pèsent **13 MB au total** ! C'est ce qui ralentit le site.

## 🎯 TAILLES ACTUELLES vs IDÉALES

| Fichier | Actuel | Idéal | Action |
|---------|--------|-------|--------|
| photo.jpeg | **1.8 MB** | 100-150 KB | Compresser à 90% |
| fast-connect.png | **2.2 MB** | 150-300 KB | Compresser à 85% |
| mindlog.png | **1.6 MB** | 150-300 KB | Compresser à 85% |
| corectversion.jpg | **1.5 MB** | 100-200 KB | Compresser à 85% |
| boutiquezirack.jpg | **1.3 MB** | 100-200 KB | Compresser à 85% |
| coiffure.jpg | **1.2 MB** | 100-200 KB | Compresser à 85% |
| AubinRealmy.jpg | **827 KB** | 100-200 KB | Compresser à 75% |
| EXO2Roes.jpg | **700 KB** | 100-200 KB | Compresser à 70% |

## 🛠️ OUTILS RECOMMANDÉS

### Option 1 : TinyPNG (En ligne - Facile)
1. Allez sur https://tinypng.com/
2. Glissez-déposez vos images
3. Téléchargez les versions compressées
4. Remplacez dans `public/images/`

**Avantage :** Gratuit, rapide, compression intelligente

### Option 2 : Squoosh (En ligne - Contrôle total)
1. Allez sur https://squoosh.app/
2. Upload l'image
3. Choisissez format WebP ou JPEG optimisé
4. Qualité : 75-85%
5. Téléchargez

**Avantage :** Conversion en WebP (meilleure compression)

### Option 3 : ImageOptim (Mac) / FileOptimizer (Windows)
- Logiciels gratuits qui compriment sans perte de qualité visible
- Glissez-déposez tout le dossier `public/images/`

## ✅ DÉJÀ FAIT AUTOMATIQUEMENT

1. ✅ **Lazy loading** ajouté sur toutes les images
   - Les images ne chargent que quand elles deviennent visibles
   
2. ✅ **Suppression de dépendances inutiles**
   - Retiré @react-three/drei et @react-three/fiber (74 packages, ~800 KB)
   
3. ✅ **Optimisation de l'animation 3D**
   - Particules réduites de 20 à 10
   - Opacité de la grille réduite

## 🚀 GAIN ATTENDU

- **Avant :** ~15 MB total (site + images)
- **Après compression images :** ~3-4 MB total
- **Gain :** **70-75% plus rapide** au chargement initial !

## 📝 PROCHAINES ÉTAPES

1. Compressez vos images avec TinyPNG ou Squoosh
2. Remplacez-les dans `public/images/`
3. Testez avec F5 dans le navigateur
4. Vérifiez avec DevTools (F12 > Network) que les images font < 300 KB chacune

---

**Note :** Le lazy loading fait déjà que seules les images visibles chargent immédiatement. Mais compresser les images donnera le meilleur résultat !
