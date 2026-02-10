# Docker ilə yerləşdirmə

Docker ilə yerləşdirmək üçün [rəsmi Next.js repo nümunəsinə və təlimatına](https://github.com/vercel/next.js/tree/canary/examples/with-docker) baxın. Layihənin kök qovluğuna [`Dockerfile`](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile) faylını əlavə edin və `next.config.js` faylını belə yeniləyin:

```js
// next.config.js
module.exports = {
  // ... konfiqurasiyanın qalan hissəsi.
  output: 'standalone',
}
```

Daha sonra docker imicini yaradıb işə sala bilərsiniz:

```bash
docker build -t nextjs-docker .
docker run -p 3000:3000 nextjs-docker
```

Alternativ olaraq docker compose istifadə etmək üçün [docker compose repo nümunəsinə](https://github.com/vercel/next.js/tree/canary/examples/with-docker-compose) baxın.
