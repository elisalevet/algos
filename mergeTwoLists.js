var mergeTwoLists = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1 !== null) {
    current.next = l1;
  } else if (l2 !== null) {
    current.next = l2;
  }
  return dummyHead.next;
};
