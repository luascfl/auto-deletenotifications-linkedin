# Bookmarklet para Deletar Notificações do LinkedIn
🇬🇧 [Read this in English](README-en.md)

Este projeto fornece um bookmarklet para excluir notificações do LinkedIn de forma eficiente e em massa. O bookmarklet adiciona caixas de seleção a cada notificação, permitindo selecionar e excluir várias notificações simultaneamente. Esta é uma versão reempacotada de um bookmarklet originalmente criado por Ian Anderson Gray.

## Principais Funcionalidades

* **Exclusão em Massa:** Exclua várias notificações do LinkedIn com um único clique.
* **Selecionar Tudo:** Selecione todas as notificações para facilitar a exclusão em massa.
* **Interface Amigável:** As caixas de seleção são integradas de forma intuitiva à página de notificações do LinkedIn.
* **Suporte Multilíngue:** Inclui versões em português e inglês.

## Tecnologias Utilizadas

* JavaScript

## Pré-requisitos

* Um navegador web (Chrome, Firefox, Safari, etc.).

## Instalação

Este projeto não requer uma instalação tradicional. Em vez disso, o bookmarklet é adicionado diretamente ao navegador:

1. **Escolha o idioma:** Selecione o código do bookmarklet correspondente ao seu idioma preferido:
    * **Português:** Use o código do arquivo `pt_Bookmarklet (Selecione o código e arraste para a barra de favoritos) Deletar notificações LinkedIn.js`.
    * **Inglês:** Use o código do arquivo `en_Bookmarklet (Select code and drag to bookmarks) Delete LinkedIn Notifications.js`.

2. **Selecione o Código do Bookmarklet:** Copie o código JavaScript inteiro do arquivo escolhido. Para selecionar tudo, use CTRL+A. Por exemplo, a versão em português é:

```javascript
javascript:(function(){if(!window.location.href.includes('/notifications/?filter=all%27')){window.location.href=%27https://www.linkedin.com/notifications/?filter=all%27;alert(%27Clique no bookmarklet novamente após a página carregar%27);return;}function addCheckboxes(){document.querySelectorAll(".nt-card-list article.nt-card").forEach(e=>{if(e.previousElementSibling&&"INPUT"===e.previousElementSibling.tagName&&"checkbox"===e.previousElementSibling.type)return;e.style.marginLeft="40px";let t=document.createElement("input");t.type="checkbox",t.style.opacity="1",t.style.marginRight="5px",t.style.pointerEvents="auto",t.style.width="20px",t.style.height="20px",t.style.marginLeft="10px",e.parentNode.insertBefore(t,e)})}function addControlButtons(){let e=document.querySelector(".artdeco-card.nt-pill-list.mb3");if(e){if(e.querySelector('%27button[onclick*="toggleSelectCheckboxes"], button[onclick*="deleteSelectedNotifications"]%27'))return;let t=document.createElement("button");t.innerText="Selecionar Tudo",t.onclick=toggleSelectCheckboxes,t.className="artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--choice nt-pill";let n=document.createElement("button");n.innerText="Excluir Notificações",n.onclick=deleteSelectedNotifications,n.className="artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--choice nt-pill",e.prepend(n,t)}}function toggleSelectCheckboxes(){let e=document.querySelectorAll(".nt-card-list input[type='%27checkbox%27']"),t=Array.from(e).every(e=>e.checked);e.forEach(e=>e.checked=!t)}function deleteSelectedNotifications(){Array.from(document.querySelectorAll(".nt-card-list article.nt-card")).forEach((e,t)=>{let n=e.previousElementSibling;n&&n.checked&&setTimeout(()=>{let t=e.querySelector('%27a[href="#trash-medium"]');t&&t.parentNode.parentNode.click()},500*t)})}addCheckboxes(),addControlButtons()})();
```

3. Arraste o código para a barra de favoritos do navegador para criar um novo bookmarklet.
* Se estiver na pasta de favoritos desejada com o código copiado, cole-o lá.

4. **Dê um Nome:** Dê ao seu bookmarklet um nome descritivo (por exemplo, "Apagar Notificações LinkedIn" ou "Delete LinkedIn Notifications").

## Uso

1. **Acesse as Notificações do LinkedIn:** Navegue até a página de notificações do LinkedIn (`https://www.linkedin.com/notifications/?filter=all`).

2. **Clique no Bookmarklet:** Clique no bookmarklet que você criou. Uma mensagem pode aparecer pedindo para clicar novamente após a página carregar. Clique novamente após um curto período. As caixas de seleção aparecerão ao lado de cada notificação.
* Se você não estiver em (`https://www.linkedin.com/notifications/?filter=all`), o script o redirecionará para a página.

3. **Selecione as Notificações:** Marque as caixas ao lado das notificações que deseja excluir.

4. **Clique em "Excluir Notificações":** Clique no botão apropriado para excluir as notificações selecionadas.

## Estrutura do Projeto

* `LICENSE`: Contém as informações da Licença MIT.
* `README.md`: Este arquivo.
* `README.md`: A versão em inglês deste arquivo.
* `pt_Bookmarklet (Selecione o código e arraste para a barra de favoritos) Deletar notificações LinkedIn.js`: A versão em português do código do bookmarklet.
* `en_Bookmarklet (Select code and drag to bookmarks) Delete LinkedIn Notifications.js`: A versão em inglês do código do bookmarklet.

## Contribuição

Este projeto é baseado no código de Ian Anderson Gray ([https://iag.me/socialmedia/how-to-bulk-delete-your-linkedin-notifications/](https://iag.me/socialmedia/how-to-bulk-delete-your-linkedin-notifications/)). Todos os créditos vão para o seu blog.

Contribuições são bem-vindas.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo `LICENSE` para detalhes.

