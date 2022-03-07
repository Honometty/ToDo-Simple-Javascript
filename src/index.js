import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ作成
  const li = document.createElement("li");
  li.innerText = text;

  // button【完了】タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了リストから取得
    deleteFromIncompleteList(completeButton.parentNode);
    // 追加する要素を作成
    const addTarget = completeButton.parentNode;
    // Todo内容のテキストを取得
    const text = addTarget.firstElementChild.innerText;
    // div以下を初期化
    addTarget.textContent = null;
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // button【戻す】生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキストを取得
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });
    // divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // button【削除】タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
