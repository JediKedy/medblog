# Xüsusi MDX komponentini necə əlavə edə bilərəm?

`components/` qovluğunda yeni bir komponent yaradın.

```tsx
export const ExampleComponent = ({ text }) => {
  return <p>{text}</p>
}
```

Sonra `MDXComponents.tsx` faylında onu idxal edib qeydiyyatdan keçirin:

```diff
+ import ExampleComponent from './ExampleComponent'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
+  ExampleComponent,
  BlogNewsletterForm,
}
```

İndi `.mdx` fayllarında həmin komponentdən istifadə edə bilərsiniz:

```mdx
## Nümunə komponent

<ExampleComponent text="Salam dünya" />
```

Aşağıdakı daha real nümunədə `DonutChart` komponenti istifadə olunur:

```diff
+ import DonutChart from './DonutChart'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
+  DonutChart,
  BlogNewsletterForm,
}
```

```mdx
## Nümunə Donut diaqramı

export const data = {
  labels: ['Qırmızı', 'Mavi', 'Sarı'],
  datasets: [
    {
      label: 'Səs sayı',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
      borderWidth: 1,
    },
  ],
}

<DonutChart data={data} />
```
