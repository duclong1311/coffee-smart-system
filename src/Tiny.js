import { useRef, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';

// Hàm giải mã HTML entities
function decodeHtmlEntities(text) {
  const doc = new DOMParser().parseFromString(text, 'text/html');
  return doc.documentElement.textContent;
}

export default function Tiny({ initialValue, onChange }) {
  const editorRef = useRef(null);

  // Ghi lại nội dung hiện tại
  const log = () => {
    if (editorRef.current) {
      // Lấy nội dung thô (raw) từ editor
      const rawContent = editorRef.current.getContent({ format: 'raw' });
      // Giải mã HTML entities nếu có
      const decodedContent = decodeHtmlEntities(rawContent);
      console.log(decodedContent); // Xuất nội dung đã giải mã
    }
  };

  // Cập nhật nội dung trong editor mỗi khi initialValue thay đổi
  useEffect(() => {
    if (editorRef.current) {
      // Chỉ sử dụng nội dung đã mã hóa HTML nếu cần thiết
      editorRef.current.setContent(initialValue); // Thiết lập nội dung mới cho editor
    }
  }, [initialValue]);

  // Hàm gọi khi nội dung editor thay đổi
  const handleEditorChange = (content, editor) => {
    // Giải mã trước khi gửi đi nếu cần
    const decodedContent = decodeHtmlEntities(content);
    onChange(decodedContent);  // Gọi hàm onChange với nội dung đã giải mã
  };

  return (
    <div className="w-full">
      <Editor
        apiKey="qke7hifjbdz3cr8otagvvvl38pmc7b3a5nccx2a4aq8j8re3"
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={initialValue} // Có thể sử dụng để thiết lập giá trị ban đầu
        init={{
          height: 300,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={handleEditorChange}  // Gọi hàm handleEditorChange khi nội dung thay đổi
      />
      <button onClick={log}>Log Content</button> {/* Nút để ghi lại nội dung */}
    </div>
  );
}
