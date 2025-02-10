# LinkedIn Notification Deleter Bookmarklet

This project provides a bookmarklet to efficiently delete LinkedIn notifications in bulk. This bookmarklet adds checkboxes to each notification, allowing for the selection and deletion of multiple notifications simultaneously.  This is a repackaged version of a bookmarklet originally created by Ian Anderson Gray.

## Key Features

* **Bulk Deletion:** Delete multiple LinkedIn notifications with a single click.
* **Select All:** Select all notifications for easy mass deletion.
* **User-Friendly Interface:** Checkboxes are seamlessly integrated into the LinkedIn notification page.
* **Multilingual Support:** Includes versions in English and Portuguese.

## Technologies Used

* JavaScript

## Prerequisites

* A web browser (Chrome, Firefox, Safari, etc.).

## Installation

This project doesn't require any installation in the traditional sense.  Instead, you install the bookmarklet directly into your browser:

1. **Choose your language:** Select the bookmarklet code that matches your preferred language:
    * **English:** Use the code from the `en_Bookmarklet (Select code and drag to bookmarks) Delete LinkedIn Notifications.js` file.
    * **Portuguese:** Use the code from the `pt_Bookmarklet (Selecione o código e arraste para a barra de favoritos) Deletar notificações LinkedIn.js` file.

2. **Copy the Bookmarklet Code:** Select the entire JavaScript code from the chosen file and copy it to your clipboard.  For example, the English version is:

```javascript
javascript:(function(){if(!window.location.href.includes('/notifications/?filter=all%27)){window.location.href=%27https://www.linkedin.com/notifications/?filter=all%27;alert(%27Click the bookmarklet again after the page loads%27);return;}function addCheckboxes(){document.querySelectorAll(".nt-card-list article.nt-card").forEach(e=>{if(e.previousElementSibling&&"INPUT"===e.previousElementSibling.tagName&&"checkbox"===e.previousElementSibling.type)return;e.style.marginLeft="40px";let t=document.createElement("input");t.type="checkbox",t.style.opacity="1",t.style.marginRight="5px",t.style.pointerEvents="auto",t.style.width="20px",t.style.height="20px",t.style.marginLeft="10px",e.parentNode.insertBefore(t,e)})}function addControlButtons(){let e=document.querySelector(".artdeco-card.nt-pill-list.mb3");if(e){if(e.querySelector(%27button[onclick*="toggleSelectCheckboxes"], button[onclick*="deleteSelectedNotifications"]%27))return;let t=document.createElement("button");t.innerText="Select All",t.onclick=toggleSelectCheckboxes,t.className="artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--choice nt-pill";let n=document.createElement("button");n.innerText="Delete Notifications",n.onclick=deleteSelectedNotifications,n.className="artdeco-pill artdeco-pill--slate artdeco-pill--3 artdeco-pill--choice nt-pill",e.prepend(n,t)}}function toggleSelectCheckboxes(){let e=document.querySelectorAll(".nt-card-list input[type=%27checkbox%27]"),t=Array.from(e).every(e=>e.checked);e.forEach(e=>e.checked=!t)}function deleteSelectedNotifications(){Array.from(document.querySelectorAll(".nt-card-list article.nt-card")).forEach((e,t)=>{let n=e.previousElementSibling;n&&n.checked&&setTimeout(()=>{let t=e.querySelector(%27a[href="#trash-medium"]');t&&t.parentNode.parentNode.click()},500*t)})}addCheckboxes(),addControlButtons()})();
```

3. **Create a Bookmark:** In your browser, create a new bookmark.

4. **Paste the Code:** In the URL field of the new bookmark, paste the JavaScript code you copied.

5. **Give it a Name:** Give your bookmark a descriptive name (e.g., "Delete LinkedIn Notifications" or "Apagar Notificações LinkedIn").

## Usage Examples

1. **Navigate to LinkedIn Notifications:** Go to your LinkedIn notifications page (`https://www.linkedin.com/notifications/?filter=all`).

2. **Click the Bookmarklet:** Click the bookmarklet you created. A prompt may appear asking you to click again after the page loads. Click the bookmarklet again after a short wait. Checkboxes will appear next to each notification.

3. **Select Notifications:** Check the boxes next to the notifications you wish to delete.

4. **Click "Delete Notifications" or "Excluir Notificações":** Click the appropriate button to delete the selected notifications.


## Project Structure

* `LICENSE`: Contains the MIT License information.
* `README.md`: This file.
* `en_Bookmarklet (Select code and drag to bookmarks) Delete LinkedIn Notifications.js`: The English version of the bookmarklet code.
* `pt_Bookmarklet (Selecione o código e arraste para a barra de favoritos) Deletar notificações LinkedIn.js`: The Portuguese version of the bookmarklet code.


## Contributing

This project is based on code by Ian Anderson Gray ([https://iag.me/socialmedia/how-to-bulk-delete-your-linkedin-notifications/](https://iag.me/socialmedia/how-to-bulk-delete-your-linkedin-notifications/)). All credits goes to his blog.

Contributions are welcomed.


## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
