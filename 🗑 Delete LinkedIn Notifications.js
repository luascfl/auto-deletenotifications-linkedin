javascript:(function(){if(!window.location.href.includes('/notifications/?filter=all%27)){window.location.href=%27https://www.linkedin.com/notifications/?filter=all%27;alert(%27Clique novamente no bookmarklet após a página carregar%27);return;}function addCheckboxes(){document.querySelectorAll(".nt-card-list article.nt-card").forEach(e=>{if(e.previousElementSibling&&"INPUT"===e.previousElementSibling.tagName&&"checkbox"===e.previousElementSibling.type)return;e.style.marginLeft="40px";let t=document.createElement("input");t.type="checkbox",t.style.opacity="1",t.style.marginRight="5px",t.style.pointerEvents="auto",t.style.width="20px",t.style.height="20px",t.style.marginLeft="10px",e.parentNode.insertBefore(t,e)})}function addControlButtons(){let e=document.querySelector(".artdeco-card.nt-pill-list.mb3");if(e){if(e.querySelector(%27button[onclick*="toggleSelectCheckboxes"], button[onclick*="deleteSelectedNotifications"]%27))return;let t=document.createElement("button");t.innerText="Selecionar Tudo",t.onclick=toggleSelectCheckboxes,t.className="artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--choice nt-pill";let n=document.createElement("button");n.innerText="Excluir Notificações",n.onclick=deleteSelectedNotifications,n.className="artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--choice nt-pill",e.prepend(n,t)}}function toggleSelectCheckboxes(){let e=document.querySelectorAll(".nt-card-list input[type=%27checkbox%27]"),t=Array.from(e).every(e=>e.checked);e.forEach(e=>e.checked=!t)}function deleteSelectedNotifications(){Array.from(document.querySelectorAll(".nt-card-list article.nt-card")).forEach((e,t)=>{let n=e.previousElementSibling;n&&n.checked&&setTimeout(()=>{let t=e.querySelector(%27a[href="#trash-medium"]');t&&t.parentNode.parentNode.click()},500*t)})}addCheckboxes(),addControlButtons()})();
