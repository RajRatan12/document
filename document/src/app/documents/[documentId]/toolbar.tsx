"use client"

import {ChevronDownIcon, LucideIcon, Undo2Icon, Redo2Icon, PrinterIcon, SpellCheckIcon, BoldIcon, ItalicIcon, Underline, MessageSquarePlusIcon, ListTodoIcon, RemoveFormattingIcon } from "lucide-react";
import { cn } from '@/lib/utils'
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
 
// const LineHeightButton = () => {
//     const { editor } = useEditorStore();
  
//     const lineHeights = [
//       { label: "Default", value: "normal" },
//       { label: "Single", value: "1" },
//       { label: "1.15", value: "1.15" },
//       { label: "1.5", value: "1.5" },
//       { label: "Double", value: "2" },
//     ];
  
//     return(
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <button
//             className="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
//           >
//             <ListCollapseIcon className="size-4" />
//           </button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
//           {lineHeights.map(({ label, value }) => (
//             <button
//               key={value}
//               onClick={() => editor?.chain().focus().setLineHeight(value).run()}
//               className={cn(
//                 "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
//                 editor?.getAttributes("paragraph").lineHeight === value && "bg-neutral-200/80"
//               )}
//             >
//               <span className="text-sm">{label}</span>
//             </button>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     );
//   }

  
//   const FontSizeButton = () => {
//     const { editor } = useEditorStore();
  
//     const currentFontSize = editor?.getAttributes("textStyle").fontSize
//       ? editor?.getAttributes("textStyle").fontSize.replace("px", "")
//       : "16";
  
//     const [fontSize, setFontSize] = useState(currentFontSize);
//     const [inputValue, setInputValue] = useState(fontSize);
//     const [isEditing, setIsEditing] = useState(false);
  
//     const updateFontSize = (newSize: string) => {
//       const size = parseInt(newSize);
//       if (!isNaN(size) && size > 0) {
//         editor?.chain().focus().setFontSize(`${size}px`).run();
//         setFontSize(newSize);
//         setInputValue(newSize);
//         setIsEditing(false);
//       }
//     };
  
//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setInputValue(e.target.value);
//     };
  
//     const handleInputBlur = () => {
//       updateFontSize(inputValue);
//     }
  
//     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//       if (e.key === "Enter") {
//         e.preventDefault();
//         updateFontSize(inputValue);
//         editor?.commands.focus();
//       }
//     };
  
//     const increment = () => {
//       const newSize = parseInt(fontSize) + 1;
//       updateFontSize(newSize.toString());
//     }
  
//     const decrement = () => {
//       const newSize = parseInt(fontSize) - 1;
//       if (newSize > 0) {
//         updateFontSize(newSize.toString());
//       }
//     }
  
//     return (
//       <div className="flex items-center gap-x-0.5">
//         <button
//           onClick={decrement}
//           className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80"
//         >
//           <MinusIcon className="size-4" />
//         </button>
//         {isEditing ? (
//           <input
//             type="text"
//             value={inputValue}
//             onChange={handleInputChange}
//             onBlur={handleInputBlur}
//             onKeyDown={handleKeyDown}
//             className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm bg-transparent focus:outline-none focus:ring-0"
//           />
//         ) : (
//           <button
//             onClick={() => {
//               setIsEditing(true);
//               setFontSize(currentFontSize);
//             }}
//             className="h-7 w-10 text-sm text-center border border-neutral-400 rounded-sm hover:bg-neutral-200/80"
//           >
//             {currentFontSize}
//           </button>
//         )}
//         <button
//           onClick={increment}
//           className="h-7 w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80"
//         >
//           <PlusIcon className="size-4" />
//         </button>
//       </div>
//     );
//   }


  const FontFamilyButton = () => {
    const { editor } = useEditorStore();
  
    const fonts = [
      { label: "Arial", value: "Arial" },
      { label: 'Times New Roman', value: 'Times New Roman' },
      { label: 'Courier New', value: 'Courier New' },
      { label: 'Georgia', value: 'Georgia' },
      { label: 'Verdana', value: 'Verdana' },
    ];
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
          >
            <span className="truncate">
              {editor?.getAttributes("textStyle").fontFamily || "Arial"}
            </span>
            <ChevronDownIcon className="ml-2 size-4 shrink-0" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
          {fonts.map(({ label, value }) => (
            <button
              onClick={() => editor?.chain().focus().setFontFamily(value).run()}
              key={value}
              className={cn(
                "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                editor?.getAttributes("textStyle").fontFamily === value && "bg-neutral-200/80"
              )}
              style={{ fontFamily: value }}
            >
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };


  const HeadingLevelButton = () => {
    const { editor } = useEditorStore();
  
    const headings = [
      { label: "Normal text", value: 0, fontSize: "16px" },
      { label: 'Heading 1', value: 1, fontSize: '32px' },
      { label: 'Heading 2', value: 2, fontSize: '24px' }, 
      { label: 'Heading 3', value: 3, fontSize: '20px' },
      { label: 'Heading 4', value: 4, fontSize: '18px' },
      { label: 'Heading 5', value: 5, fontSize: '16px' },
    ];
  
    const getCurrentHeading = () => {
      for (let level = 1; level <= 5; level++) {
        if (editor?.isActive("heading", { level })) {
          return `Heading ${level}`;
        }
      }
  
      return "Normal text";
    };
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
          >
            <span className="truncate">
              {getCurrentHeading()}
            </span>
            <ChevronDownIcon className="ml-2 size-4 shrink-0" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
          {headings.map(({ label, value, fontSize }) => (
            <button
              key={value}
              style={{ fontSize }}
              onClick={() => {
                if (value === 0) {
                  editor?.chain().focus().setParagraph().run();
                } else {
                  editor?.chain().focus().toggleHeading({ level: value as Level }).run();
                }
              }}
              className={cn(
                "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                (value === 0 && !editor?.isActive("heading")) || editor?.isActive("heading", { level: value }) && "bg-neutral-200/80"
              )}
            >
              {label}
            </button>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon;
};

const ToolbarButton = ({
    onClick,
    isActive,
    icon: Icon,

}: ToolbarButtonProps) => {
    return (
        <button onClick = {onClick}
        className={cn(
            "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
            isActive && "bg-neutral-200/80"
        )}
        >
            <Icon className="size-4"/>
        </button>
    ) 
}


export const Toolbar = () => {
    const {editor} = useEditorStore();
    console.log("Toolbar editor: " ,{editor})
    const sections: {
        label: string;
        icon: LucideIcon;
        onClick: () => void;
        isActive?: boolean;
    }[][] = [
        [
            {
                label: "Undo",
                icon: Undo2Icon,
                onClick: () => editor?.chain().focus().undo().run(),
            },
            {
                label: "Redo",
                icon: Redo2Icon,
                onClick: () => editor?.chain().focus().redo().run(),
            },
            {
                label: "Print",
                icon: PrinterIcon,
                onClick: () => window.print(),
            },
            {
                label: "Spell Check",
                icon: SpellCheckIcon,
                onClick: () => {
                    const current = editor?.view.dom.getAttribute("spellcheck");
                    editor?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false");
                },
            }
        ],
        [
            {
                label: "Bold",
                icon: BoldIcon,
                isActive: editor?.isActive("bold"),
                onClick: () => editor?.chain().focus().toggleBold().run(),
            },
            {
                label: "Italic",
                icon: ItalicIcon,
                isActive: editor?.isActive("bold"),
                onClick: () => editor?.chain().focus().toggleItalic().run(),
            },
            {
                label: "Underline",
                icon: Underline,
                isActive: editor?.isActive("underline"),
                onClick: () => editor?.chain().focus().toggleUnderline().run(),
            },
        ],
        [
            {
                label: "Comment",
                icon: MessageSquarePlusIcon,
                isActive: false,
                onClick: () => {
                    console.log("Comment")
                },
            },
            {
                label: "List Todo",
                icon: ListTodoIcon,
                isActive: editor?.isActive("taskList"),
                onClick: () => editor?.chain().focus().toggleTaskList().run(),
            },
            {
                label: "Remove Formatting",
                icon: RemoveFormattingIcon,
                onClick: () => editor?.chain().focus().unsetAllMarks().run(),
            },
        ]
    ];
    return (
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            {sections[0].map((item) =>(
                <ToolbarButton key={item.label} {...item}/>
            ))}
            <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
            <FontFamilyButton/>
            <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
            <HeadingLevelButton />
            <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
            {sections[1].map((item) => (
                <ToolbarButton key={item.label} {...item}/>
            ))}
            <Separator orientation="vertical" className="h-6 bg-neutral-300"/>
            {sections[2].map((item) => (
                <ToolbarButton key={item.label} {...item}/>
            ))}
        </div>
    )
}