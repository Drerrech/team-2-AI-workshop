def urgency_label(days_left: int) -> str:
    """Return the urgency label for an opportunity's remaining days."""
    if days_left < 0:
        return "Overdue"
    if days_left <= 3:
        if days_left == 0:
            return "Due today"
        unit = "day" if days_left == 1 else "days"
        return f"Due in {days_left} {unit}"
    if days_left <= 7:
        return f"Due in {days_left} days"
    return ""
