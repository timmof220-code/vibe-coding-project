import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def ask_openai(prompt: str) -> str:
    api_key = os.getenv("OPENAI_API_KEY")
    if not api_key or api_key.startswith("["):
        raise ValueError(
            "OPENAI_API_KEY not set. Edit .env and replace the placeholder with your actual key."
        )

    try:
        from openai import OpenAI
        client = OpenAI(api_key=api_key)
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}],
        )
        return response.choices[0].message.content
    except ImportError:
        raise ImportError("openai package not installed. Run: pip install openai")


if __name__ == "__main__":
    project_description = "веб-приложение для управления задачами с красивым интерфейсом"

    prompt = (
        f"Придумай 3 креативных названия для моего проекта: {project_description}"
    )

    print("Отправляю запрос к OpenAI...\n")
    print(f"Запрос: {prompt}\n")
    print("-" * 50)

    result = ask_openai(prompt)
    print("Ответ от OpenAI:")
    print(result)
