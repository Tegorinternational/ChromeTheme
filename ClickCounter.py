import tkinter as tk

class ClickCounterApp:
    def __init__(self, root):
        self.root = root
        self.count = 0

        self.label = tk.Label(root, text="Click Count: 0")
        self.label.pack(pady=10)

        self.button = tk.Button(root, text="Click Me!", command=self.increment_count)
        self.button.pack()

    def increment_count(self):
        self.count += 1
        self.label.config(text=f"Click Count: {self.count}")

if __name__ == "__main__":
    root = tk.Tk()
    app = ClickCounterApp(root)
    root.mainloop()
