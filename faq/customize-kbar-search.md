# `kbar` axtarışını necə fərdiləşdirə bilərəm?

Aşağıdakı kimi bir `SearchProvider` komponenti əlavə edin və `app/layout.tsx` faylında standart `SearchProvider` əvəzinə bunu istifadə edin.

`defaultActions` başlanğıc əmrlər siyahısıdır.

`onSearchDocumentsLoad` isə `searchDocumentsPath` ilə göstərilən sənədlər yüklənəndə çağırılan callback funksiyasıdır. Dinamik yüklənən axtarışı söndürmək üçün `searchDocumentsPath` dəyərini `false` edin.

```tsx
'use client'

import { KBarSearchProvider } from 'pliny/search/KBar'
import { useRouter } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import { Blog } from 'contentlayer/generated'

export const SearchProvider = ({ children }) => {
  const router = useRouter()
  return (
    <KBarSearchProvider
      kbarConfig={{
        searchDocumentsPath: 'search.json',
        defaultActions: [
          {
            id: 'homepage',
            name: 'Ana səhifə',
            keywords: '',
            shortcut: ['h', 'h'],
            section: 'Ana səhifə',
            perform: () => router.push('/'),
          },
          {
            id: 'projects',
            name: 'Layihələr',
            keywords: '',
            shortcut: ['p'],
            section: 'Ana səhifə',
            perform: () => router.push('/projects'),
          },
        ],
        onSearchDocumentsLoad(json) {
          return json.map((post: CoreContent<Blog>) => ({
            id: post.path,
            name: post.title,
            keywords: post?.summary || '',
            section: 'Bloq',
            subtitle: post.tags.join(', '),
            perform: () => router.push('/' + post.path),
          }))
        },
      }}
    >
      {children}
    </KBarSearchProvider>
  )
}
```

Hətta bütün bloq məzmununda tam mətn axtarışı da qura bilərsiniz. Bunun üçün `contentlayer.config.ts` içindəki `createSearchIndex` funksiyasını belə dəyişin (axtarış indeksi faylı daha böyük olacaq):

```tsx
function createSearchIndex(allBlogs) {
  if (
    siteMetadata?.search?.provider === 'kbar' &&
    siteMetadata.search.kbarConfig.searchDocumentsPath
  ) {
    writeFileSync(
      `public/${siteMetadata.search.kbarConfig.searchDocumentsPath}`,
      JSON.stringify(sortPosts(allBlogs))
    )
    console.log('Yerli axtarış indeksi yaradıldı...')
  }
}
```

Yəni `JSON.stringify(allCoreContent(sortPosts(allBlogs)))` əvəzinə `JSON.stringify((sortPosts(allBlogs)))` istifadə edilir.

Daha sonra dəyişdirilmiş `SearchProvider` daxilində `onSearchDocumentsLoad` hissəsində `keywords`-ə xam məzmunu verin:

```tsx
onSearchDocumentsLoad(json) {
  return json.map((post: Blog) => ({
    id: post.path,
    name: post.title,
    keywords: post.body.raw,
    section: 'Bloq',
    subtitle: post.tags.join(', '),
    perform: () => router.push('/' + post.path),
  }))
}
```
