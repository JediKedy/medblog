interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Axtarış sistemi',
    description: `Dünyadakı istənilən məlumatı tapa bilsəniz necə olar? Veb səhifələr, şəkillər, videolar
    və daha çoxu. Google axtardığınızı dəqiq tapmağınıza kömək edən çoxsaylı funksiyalara
    malikdir.`,
    imgSrc: '/static/images/google.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Zaman maşını',
    description: `Keçmişə və ya gələcəyə səyahət edə bildiyinizi təsəvvür edin. Sadəcə düyməni
    istədiyiniz tarixə çevirin və "Get" düyməsini basın. Bu sadə və sərfəli həll ilə
    itən açarlar və unudulan qulaqlıqlar barədə narahatlığa son.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
