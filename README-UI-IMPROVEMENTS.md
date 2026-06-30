Resumo e instruções rápidas
===========================

Arquivos adicionados/alterados:
- index.html (substitui a página principal; adapte conforme necessário)
- assets/css/styles.css (estilos principais)
- assets/js/main.js (menu mobile)
- assets/images/logo.svg (logo placeholder)

Como aplicar (manual):
1. Coloque os arquivos nas respectivas pastas no repositório:
   - assets/css/styles.css
   - assets/js/main.js
   - assets/images/logo.svg e hero.webp (adicione suas imagens em assets/images/)
   - index.html (substitua ou integre o conteúdo no seu index atual)
2. No repositório, crie um branch:
   git checkout -b improve/ui-styles
3. Adicione, commit e envie:
   git add .
   git commit -m "UI: redesign header/hero, estilos e melhorias de acessibilidade"
   git push origin improve/ui-styles
4. Abra um Pull Request no GitHub.

Recomendações de otimização:
- Converter imagens para WebP (ex.: hero.webp) e usar loading="lazy" (já aplicado).
- Servir fontes com display=swap e self-host se possível.
- Usar Lighthouse (Chrome) para verificar performance e acessibilidade.
- Substituir logo.svg pelo seu logo real (mesmo caminho).

Se quiser que eu abra o PR
- Confirme o repositório exato (owner/repo), por exemplo: gabrieldagaluno-sys/gabrieldagaluno-sys.github.io
- Confirme que eu posso criar um branch (vou criar improve/ui-styles).
- Eu criarei o branch, farei commit dos arquivos e abrirei a PR com descrição e checklist de revisão.

Próximos ajustes que posso aplicar (opcionais)
- Tema claro/escuro com toggle.
- Animações sutis para micro-interações.
- Conversão automática de imagens e compressão.
- Revisão de conteúdo/textos e testes de contraste.

