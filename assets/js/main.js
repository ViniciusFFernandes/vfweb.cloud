(function(){
  // Ano no rodapé
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Fechar menu mobile ao clicar em link
  const nav = document.getElementById('navLinks');
  if (nav) {
    nav.querySelectorAll('a.nav-link').forEach(a => {
      a.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(nav);
        if (bsCollapse) bsCollapse.hide();
      });
    });
  }

  // Form demo (não envia para servidor)
  const form = document.getElementById('leadForm');
  const msg = document.getElementById('formMsg');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (msg) msg.textContent = 'Mensagem pronta. Agora conecte o action do formulário para seu endpoint.';

      // Se quiser abrir WhatsApp com a mensagem, descomente e ajuste.
      // const data = new FormData(form);
      // const text = `Olá! Meu nome é ${data.get('nome')}. Whats: ${data.get('whats')}. ${data.get('mensagem')}`;
      // window.open(`https://wa.me/5500000000000?text=${encodeURIComponent(text)}`, '_blank');
    });
  }
})();
