import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface TiptapEditorProps {
  content: any;
}

const TiptapEditor: React.FC<TiptapEditorProps> = ({ content }) => {
  const editor = useEditor({
    editable: false,
    extensions: [
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: "text-lg font-bold text-[#055479]",
          },
        },
        paragraph: {
          HTMLAttributes: {
            class: "text-sm leading-relaxed text-justify",
          },
        },
      }),
    ],
    content,
  });

  return <EditorContent editor={editor} />;
};

export default TiptapEditor;
