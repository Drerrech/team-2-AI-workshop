def urgency_label(days_left: int) -> str:
    """Return the urgency label for an opportunity's remaining days."""
    if days_left < 0:
        return "overdue"
    if days_left <= 3:
        return "due within 3 days"
    return "due this week"
